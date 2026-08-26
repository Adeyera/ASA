const mongoose = require('mongoose');

const arSessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    artwork: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artwork',
      required: true,
    },
    placement: {
      wallWidth: { type: Number, required: true },
      wallHeight: { type: Number, required: true },
      offsetX: { type: Number, default: 0 },
      offsetY: { type: Number, default: 0 },
      scale: { type: Number, default: 1.0 },
      rotation: { type: Number, default: 0 },
    },
    roomType: {
      type: String,
      enum: ['living_room', 'bedroom', 'office', 'gallery', 'custom'],
      default: 'living_room',
    },
    deviceInfo: {
      platform: { type: String, enum: ['ios', 'android', 'web'], default: 'web' },
      osVersion: String,
      deviceModel: String,
    },
    isCompleted: { type: Boolean, default: false },
    addedToCart: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ARSession', arSessionSchema);
