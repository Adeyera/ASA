const Order = require('../models/Order');
const Artwork = require('../models/Artwork');
const User = require('../models/User');
const { initializePayment, verifyPayment } = require('../config/paystack');
const { sendEmail } = require('../config/email');

exports.createOrder = async (req, res, next) => {
  try {
    const { items, shippingAddress, currency = 'NGN', deliveryNotes } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Order must contain at least one item' });
    }

    let totalNgn = 0;
    let totalUsd = 0;
    const orderItems = [];
    const artistIds = new Set();

    for (const item of items) {
      const artwork = await Artwork.findById(item.artworkId);
      if (!artwork) {
        return res
          .status(404)
          .json({ message: `Artwork ${item.artworkId} not found` });
      }
      if (artwork.status !== 'Active') {
        return res
          .status(400)
          .json({ message: `Artwork "${artwork.title}" is not available` });
      }

      totalNgn += artwork.price.ngn * (item.quantity || 1);
      totalUsd += artwork.price.usd * (item.quantity || 1);

      orderItems.push({
        artwork: artwork._id,
        title: artwork.title,
        price: { ngn: artwork.price.ngn, usd: artwork.price.usd },
        quantity: item.quantity || 1,
        image: artwork.thumbnail || artwork.images[0]?.url || '',
      });

      artistIds.add(artwork.artist.toString());
    }

    if (artistIds.size > 1) {
      return res
        .status(400)
        .json({ message: 'All items must be from the same artist' });
    }

    const artist = [...artistIds][0];

    const order = await Order.create({
      buyer: req.user.id,
      artist,
      items: orderItems,
      totalAmount: { ngn: totalNgn, usd: totalUsd },
      currency,
      shippingAddress,
      deliveryNotes,
      status: 'Pending',
    });

    const artistUser = await User.findById(artist);
    const itemTitles = orderItems.map((i) => i.title).join(', ');
    sendEmail({
      to: req.user.email,
      subject: `Order Placed: ${itemTitles}`,
      html: `<h2>Order Confirmation</h2><p>Your order for <strong>${itemTitles}</strong> has been placed.</p><p>Total: ₦${totalNgn.toLocaleString()}</p><p>We'll notify you when it's confirmed.</p>`,
    });
    sendEmail({
      to: artistUser?.email,
      subject: `New Order: ${itemTitles}`,
      html: `<h2>New Order Received</h2><p>A buyer has ordered <strong>${itemTitles}</strong>.</p><p>Check your dashboard for details.</p>`,
    });

    const payment = await initializePayment(
      req.user.email,
      currency === 'NGN' ? totalNgn : totalUsd,
      { orderId: order._id.toString() }
    );

    if (!payment.status) {
      return res.status(400).json({ message: 'Payment initialization failed' });
    }

    res.status(201).json({
      success: true,
      order,
      paymentUrl: payment.data.authorization_url,
      paymentReference: payment.data.reference,
    });
  } catch (error) {
    next(error);
  }
};

exports.verifyOrderPayment = async (req, res, next) => {
  try {
    const { reference } = req.params;

    const payment = await verifyPayment(reference);
    if (!payment.status || payment.data.status !== 'success') {
      return res.status(400).json({ message: 'Payment verification failed' });
    }

    const order = await Order.findOneAndUpdate(
      { paymentReference: reference },
      {
        paymentStatus: 'Paid',
        status: 'Confirmed',
      },
      { new: true }
    );

    if (order) {
      for (const item of order.items) {
        await Artwork.findByIdAndUpdate(item.artwork, { status: 'Sold' });
      }
      const buyer = await User.findById(order.buyer);
      const artist = await User.findById(order.artist);
      const itemTitles = order.items.map((i) => i.title).join(', ');
      sendEmail({
        to: buyer?.email,
        subject: `Payment Confirmed: ${itemTitles}`,
        html: `<h2>Payment Successful</h2><p>Your payment for <strong>${itemTitles}</strong> is confirmed.</p><p>Order #${order._id} is now being processed.</p>`,
      });
      sendEmail({
        to: artist?.email,
        subject: `Sale Confirmed: ${itemTitles}`,
        html: `<h2>Sale Confirmed</h2><p><strong>${itemTitles}</strong> has been sold.</p><p>Ship to: ${order.shippingAddress?.fullName}, ${order.shippingAddress?.address}, ${order.shippingAddress?.city}</p>`,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Payment verified successfully',
      order,
    });
  } catch (error) {
    next(error);
  }
};

exports.getMyOrders = async (req, res, next) => {
  try {
    const filter =
      req.user.role === 'artist'
        ? { artist: req.user.id }
        : { buyer: req.user.id };

    const orders = await Order.find(filter)
      .populate('items.artwork', 'title images dimensions')
      .populate('buyer', 'name email')
      .sort('-createdAt');

    res.status(200).json({ success: true, count: orders.length, orders });
  } catch (error) {
    next(error);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('items.artwork', 'title images dimensions price')
      .populate('buyer', 'name email')
      .populate('artist', 'name email');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (
      order.buyer._id.toString() !== req.user.id &&
      order.artist._id.toString() !== req.user.id &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    next(error);
  }
};

exports.updateOrderStatus = async (req, res, next) => {
  try {
    const { status, trackingNumber } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    const validTransitions = {
      Pending: ['Confirmed', 'Cancelled'],
      Confirmed: ['Processing', 'Cancelled'],
      Processing: ['Shipped', 'Cancelled'],
      Shipped: ['Delivered'],
    };

    if (
      !validTransitions[order.status]?.includes(status)
    ) {
      return res
        .status(400)
        .json({ message: `Cannot transition from ${order.status} to ${status}` });
    }

    order.status = status;
    if (trackingNumber) order.trackingNumber = trackingNumber;
    if (status === 'Delivered') order.deliveredAt = new Date();

    await order.save();
    res.status(200).json({ success: true, order });
  } catch (error) {
    next(error);
  }
};

exports.getSalesOverview = async (req, res, next) => {
  try {
    const stats = await Order.aggregate([
      { $match: { artist: new Types.ObjectId(req.user.id) } },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          totalRevenue: { $sum: '$totalAmount.ngn' },
        },
      },
    ]);

    const totalSales = await Order.countDocuments({
      artist: req.user.id,
      status: { $ne: 'Cancelled' },
    });

    const totalRevenue = await Order.aggregate([
      {
        $match: {
          artist: new Types.ObjectId(req.user.id),
          paymentStatus: 'Paid',
        },
      },
      { $group: { _id: null, total: { $sum: '$totalAmount.ngn' } } },
    ]);

    res.status(200).json({
      success: true,
      stats,
      totalSales,
      totalRevenue: totalRevenue[0]?.total || 0,
    });
  } catch (error) {
    next(error);
  }
};
