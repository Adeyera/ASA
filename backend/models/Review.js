const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    artwork: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artwork',
      required: true,
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: 1,
      max: 5,
    },
    title: { type: String, maxlength: 200 },
    comment: { type: String, maxlength: 2000 },
    isVerifiedPurchase: { type: Boolean, default: false },
  },
  { timestamps: true }
);

reviewSchema.index({ artwork: 1, createdAt: -1 });
reviewSchema.index({ buyer: 1, artwork: 1 }, { unique: true });

module.exports = mongoose.model('Review', reviewSchema);
