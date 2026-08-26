const express = require('express');
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { protect, authorize } = require('../middleware/auth');
const {
  createOrder,
  verifyOrderPayment,
  getMyOrders,
  getOrder,
  updateOrderStatus,
  getSalesOverview,
} = require('../controllers/orderController');

const router = express.Router();

router
  .route('/')
  .post(
    protect,
    [
      body('items').isArray({ min: 1 }).withMessage('At least one item required'),
      body('shippingAddress.fullName').trim().notEmpty(),
      body('shippingAddress.phone').trim().notEmpty(),
      body('shippingAddress.address').trim().notEmpty(),
      body('shippingAddress.city').trim().notEmpty(),
      body('shippingAddress.state').trim().notEmpty(),
      body('shippingAddress.country').trim().notEmpty(),
    ],
    validate,
    createOrder
  )
  .get(protect, getMyOrders);

router.get('/sales-overview', protect, authorize('artist', 'admin'), getSalesOverview);
router.get('/verify/:reference', verifyOrderPayment);

router
  .route('/:id')
  .get(protect, getOrder)
  .put(protect, authorize('artist', 'admin'), updateOrderStatus);

module.exports = router;
