// Cloudinary upload helper for artwork images.
// Falls back to direct URL storage for local development.

const uploadToCloudinary = async (filePath) => {
  if (!process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME === 'your-cloud') {
    console.warn('⚠ Cloudinary not configured — storing URL as-is');
    return { url: filePath, public_id: null };
  }

  const cloudinary = require('cloudinary').v2;
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const result = await cloudinary.uploader.upload(filePath, {
    folder: 'african-art-marketplace',
    transformation: [{ quality: 'auto', fetch_format: 'auto' }],
  });

  return { url: result.secure_url, public_id: result.public_id };
};

const deleteFromCloudinary = async (publicId) => {
  if (!publicId) return;
  try {
    const cloudinary = require('cloudinary').v2;
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Cloudinary delete failed:', error.message);
  }
};

module.exports = { uploadToCloudinary, deleteFromCloudinary };
