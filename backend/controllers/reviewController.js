const Review = require('../models/Review');
const Order = require('../models/Order');
const Artwork = require('../models/Artwork');

exports.createReview = async (req, res, next) => {
  try {
    const { artworkId, rating, title, comment } = req.body;

    const order = await Order.findOne({
      buyer: req.user.id,
      'items.artwork': artworkId,
      status: 'Delivered',
    });

    if (!order) {
      return res
        .status(400)
        .json({ message: 'You must purchase and receive this artwork before reviewing' });
    }

    const existing = await Review.findOne({
      buyer: req.user.id,
      artwork: artworkId,
    });

    if (existing) {
      return res
        .status(400)
        .json({ message: 'You have already reviewed this artwork' });
    }

    const review = await Review.create({
      artwork: artworkId,
      buyer: req.user.id,
      order: order._id,
      rating,
      title,
      comment,
      isVerifiedPurchase: true,
    });

    res.status(201).json({ success: true, review });
  } catch (error) {
    next(error);
  }
};

exports.getArtworkReviews = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const total = await Review.countDocuments({ artwork: req.params.artworkId });

    const reviews = await Review.find({ artwork: req.params.artworkId })
      .populate('buyer', 'name avatar')
      .sort('-createdAt')
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    const avgResult = await Review.aggregate([
      { $match: { artwork: new Types.ObjectId(req.params.artworkId) } },
      { $group: { _id: null, averageRating: { $avg: '$rating' } } },
    ]);

    res.status(200).json({
      success: true,
      count: reviews.length,
      total,
      totalPages: Math.ceil(total / Number(limit)),
      currentPage: Number(page),
      averageRating: avgResult[0]?.averageRating || 0,
      reviews,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    if (
      review.buyer.toString() !== req.user.id &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await review.deleteOne();
    res.status(200).json({ success: true, message: 'Review deleted' });
  } catch (error) {
    next(error);
  }
};
