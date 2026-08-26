const express = require('express');
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { protect, authorize } = require('../middleware/auth');
const {
  createArtwork,
  getArtworks,
  getArtwork,
  updateArtwork,
  deleteArtwork,
  getMyArtworks,
  getArtworkStyles,
  getArtworkMediums,
} = require('../controllers/artworkController');

const router = express.Router();

router
  .route('/')
  .get(getArtworks)
  .post(
    protect,
    [
      body('title').trim().notEmpty().withMessage('Title is required'),
      body('description').trim().notEmpty().withMessage('Description is required'),
      body('medium').trim().notEmpty().withMessage('Medium is required'),
      body('style').trim().notEmpty().withMessage('Style is required'),
      body('price.ngn').isNumeric().withMessage('NGN price is required'),
      body('price.usd').isNumeric().withMessage('USD price is required'),
      body('dimensions.height').isNumeric().withMessage('Height is required'),
      body('dimensions.width').isNumeric().withMessage('Width is required'),
      body('images').isArray({ min: 1 }).withMessage('At least one image is required'),
    ],
    validate,
    createArtwork
  );

router.get('/styles', getArtworkStyles);
router.get('/mediums', getArtworkMediums);
router.get('/my', protect, getMyArtworks);

router
  .route('/:id')
  .get(getArtwork)
  .put(protect, updateArtwork)
  .delete(protect, deleteArtwork);

module.exports = router;
