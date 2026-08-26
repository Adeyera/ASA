const express = require('express');
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { protect } = require('../middleware/auth');
const {
  createReview,
  getArtworkReviews,
  deleteReview,
} = require('../controllers/reviewController');

const router = express.Router();

router.post(
  '/',
  protect,
  [
    body('artworkId').isMongoId().withMessage('Valid artwork ID required'),
    body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be 1-5'),
    body('comment')
      .optional()
      .trim()
      .isLength({ max: 2000 }),
  ],
  validate,
  createReview
);

router.get('/artwork/:artworkId', getArtworkReviews);
router.delete('/:id', protect, deleteReview);

module.exports = router;
