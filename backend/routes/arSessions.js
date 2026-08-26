const express = require('express');
const { protect } = require('../middleware/auth');
const {
  saveARSession,
  getARSessions,
  updateARSession,
} = require('../controllers/arSessionController');

const router = express.Router();

router.post('/', protect, saveARSession);
router.get('/artwork/:artworkId', getARSessions);
router.put('/:id', protect, updateARSession);

module.exports = router;
