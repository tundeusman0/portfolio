const { uploadImage, getImage } = require('../utils/utils');
const User = require('../../../models/user');

exports.updateUserPix = async (req, res) => {
  if (!req.file) {
    return res.status(406).json({ msg: 'Please upload a pictue' });
  }
  await uploadImage(req, res, 'homePix', User, { _id: req.user._id });
  (error, req, res, next) => {
    res.status(400).json({
      error: error.message
    });
  };
};

exports.getUserPix = async (req, res) => {
  const user = await User.findOne();
  if (!user.isAdmin) {
    throw new Error();
  }
  await getImage(res, User, 'homePix');
};
