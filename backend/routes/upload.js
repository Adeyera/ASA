const express = require('express');
const multer = require('multer');
const { protect } = require('../middleware/auth');
const { uploadImage } = require('../controllers/uploadController');

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG, PNG, WebP, and AVIF images are allowed'), false);
    }
  },
});

const router = express.Router();

router.post('/', protect, upload.single('image'), uploadImage);

module.exports = router;
