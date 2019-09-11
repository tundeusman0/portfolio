const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(406).json({ msg: 'Not Authorized' });
  }
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      throw new Error();
    }
    const user = await User.findOne({ _id: decoded._id });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(400).json({ msg: 'Not Authorized' });
  }
};
