const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema(
  {
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: 200,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      maxlength: 2000,
    },
    medium: {
      type: String,
      required: [true, 'Medium is required'],
      trim: true,
    },
    style: {
      type: String,
      required: [true, 'Style is required'],
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
      default: '',
    },
    images: [
      {
        url: { type: String, required: true },
        alt: { type: String, default: '' },
      },
    ],
    thumbnail: { type: String, default: '' },
    price: {
      ngn: { type: Number, required: [true, 'NGN price is required'], min: 0 },
      usd: { type: Number, required: [true, 'USD price is required'], min: 0 },
    },
    dimensions: {
      height: { type: Number, required: true },
      width: { type: Number, required: true },
      depth: { type: Number, default: 0 },
      unit: { type: String, enum: ['cm', 'in'], default: 'cm' },
    },
    weight: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ['Draft', 'Active', 'Sold', 'Archived'],
      default: 'Active',
    },
    tags: [{ type: String, trim: true }],
    culturalOrigin: {
      country: { type: String, default: '' },
      region: { type: String, default: '' },
      tribe: { type: String, default: '' },
    },
    materials: [{ type: String }],
    yearCreated: { type: Number },
    isFeatured: { type: Boolean, default: false },
    viewCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

artworkSchema.index({ status: 1, isFeatured: -1, createdAt: -1 });
artworkSchema.index({ artist: 1 });
artworkSchema.index({ 'price.ngn': 1 });
artworkSchema.index({ tags: 1 });

module.exports = mongoose.model('Artwork', artworkSchema);
