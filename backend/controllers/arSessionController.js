const ARSession = require('../models/ARSession');

exports.saveARSession = async (req, res, next) => {
  try {
    const sessionData = {
      ...req.body,
      user: req.user?.id || null,
    };

    const session = await ARSession.create(sessionData);
    res.status(201).json({ success: true, session });
  } catch (error) {
    next(error);
  }
};

exports.getARSessions = async (req, res, next) => {
  try {
    const filter = { artwork: req.params.artworkId };
    if (req.user) filter.user = req.user.id;

    const sessions = await ARSession.find(filter)
      .populate('artwork', 'title dimensions images')
      .sort('-createdAt')
      .limit(20);

    res.status(200).json({ success: true, count: sessions.length, sessions });
  } catch (error) {
    next(error);
  }
};

exports.updateARSession = async (req, res, next) => {
  try {
    const session = await ARSession.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!session) {
      return res.status(404).json({ message: 'AR session not found' });
    }

    res.status(200).json({ success: true, session });
  } catch (error) {
    next(error);
  }
};
