const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      // DEMO MODE: minlength relaxed (was 8) for easy demo sign-up
      minlength: 1,
      select: false,
    },
    role: {
      type: String,
      enum: ['buyer', 'artist', 'admin'],
      default: 'buyer',
    },
    avatar: {
      type: String,
      default: '',
    },
    bio: { type: String, maxlength: 500 },
    location: {
      country: { type: String, default: '' },
      city: { type: String, default: '' },
    },
    phone: { type: String, default: '' },
    isVerified: { type: Boolean, default: false },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = mongoose.model('User', userSchema);
