const Artwork = require('../models/Artwork');

const { Types } = require('mongoose');

exports.createArtwork = async (req, res, next) => {
  try {
    req.body.artist = req.user.id;
    const artwork = await Artwork.create(req.body);
    res.status(201).json({ success: true, artwork });
  } catch (error) {
    next(error);
  }
};

exports.getArtworks = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 12,
      status,
      style,
      medium,
      minPrice,
      maxPrice,
      sort = '-createdAt',
      search,
      artist,
      isFeatured,
    } = req.query;

    const filter = {};

    if (status) filter.status = status;
    else filter.status = 'Active';

    if (style) filter.style = style;
    if (medium) filter.medium = medium;
    if (artist) filter.artist = artist;
    if (isFeatured) filter.isFeatured = true;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } },
      ];
    }
    if (minPrice || maxPrice) {
      filter['price.usd'] = {};
      if (minPrice) filter['price.usd'].$gte = Number(minPrice);
      if (maxPrice) filter['price.usd'].$lte = Number(maxPrice);
    }

    const total = await Artwork.countDocuments(filter);

    const artworks = await Artwork.find(filter)
      .populate('artist', 'name avatar location')
      .sort(sort)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      count: artworks.length,
      total,
      totalPages: Math.ceil(total / Number(limit)),
      currentPage: Number(page),
      artworks,
    });
  } catch (error) {
    next(error);
  }
};

exports.getArtwork = async (req, res, next) => {
  try {
    const artwork = await Artwork.findById(req.params.id)
      .populate('artist', 'name avatar bio location');

    if (!artwork) {
      return res.status(404).json({ message: 'Artwork not found' });
    }

    const Review = require('../models/Review');
    const reviews = await Review.find({ artwork: req.params.id })
      .populate('buyer', 'name avatar')
      .sort('-createdAt')
      .limit(10);

    const avgResult = await Review.aggregate([
      { $match: { artwork: new Types.ObjectId(req.params.id) } },
      { $group: { _id: null, averageRating: { $avg: '$rating' } } },
    ]);

    artwork.viewCount += 1;
    await artwork.save();

    res.status(200).json({
      success: true,
      artwork: {
        ...artwork.toObject(),
        reviews,
        averageRating: avgResult[0]?.averageRating || 0,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.updateArtwork = async (req, res, next) => {
  try {
    const artwork = await Artwork.findById(req.params.id);

    if (!artwork) {
      return res.status(404).json({ message: 'Artwork not found' });
    }

    if (
      artwork.artist.toString() !== req.user.id &&
      req.user.role !== 'admin'
    ) {
      return res
        .status(403)
        .json({ message: 'Not authorized to update this artwork' });
    }

    const updated = await Artwork.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, artwork: updated });
  } catch (error) {
    next(error);
  }
};

exports.deleteArtwork = async (req, res, next) => {
  try {
    const artwork = await Artwork.findById(req.params.id);

    if (!artwork) {
      return res.status(404).json({ message: 'Artwork not found' });
    }

    if (
      artwork.artist.toString() !== req.user.id &&
      req.user.role !== 'admin'
    ) {
      return res
        .status(403)
        .json({ message: 'Not authorized to delete this artwork' });
    }

    await artwork.deleteOne();
    res.status(200).json({ success: true, message: 'Artwork deleted' });
  } catch (error) {
    next(error);
  }
};

exports.getMyArtworks = async (req, res, next) => {
  try {
    const filter = { artist: req.user.id };
    if (req.query.status) filter.status = req.query.status;

    const artworks = await Artwork.find(filter).sort('-createdAt');

    res.status(200).json({ success: true, count: artworks.length, artworks });
  } catch (error) {
    next(error);
  }
};

exports.getArtworkStyles = async (req, res, next) => {
  try {
    const styles = await Artwork.distinct('style', { status: 'Active' });
    res.status(200).json({ success: true, styles });
  } catch (error) {
    next(error);
  }
};

exports.getArtworkMediums = async (req, res, next) => {
  try {
    const mediums = await Artwork.distinct('medium', { status: 'Active' });
    res.status(200).json({ success: true, mediums });
  } catch (error) {
    next(error);
  }
};
