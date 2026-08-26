const express = require('express');
const { renderRoom, imageProxy } = require('../controllers/renderController');

const router = express.Router();

router.post('/render-room', renderRoom);
router.get('/image-proxy', imageProxy);

module.exports = router;
