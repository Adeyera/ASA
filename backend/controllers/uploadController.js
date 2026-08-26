const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const filename = `artwork-${Date.now()}.jpg`;
    const outputPath = path.join(__dirname, '..', 'uploads', filename);

    await sharp(req.file.buffer)
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toFile(outputPath);

    // Relative URL: works through the dev proxy (any host/protocol)
    // and same-origin in production. Absolute localhost URLs break on
    // HTTPS pages (mixed content) and LAN devices.
    const url = `/uploads/${filename}`;

    res.status(200).json({
      success: true,
      url,
      filename,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { uploadImage };
