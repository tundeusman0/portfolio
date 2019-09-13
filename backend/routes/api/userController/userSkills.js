const User = require('../../../models/user');
const { updateDbArrayObj } = require('../utils/utils');

exports.postUserSkills = async (req, res) => {
  const { rating, skill } = req.body;
  if (!rating || !skill) {
    return res.status(406).json({ msg: 'fill all fields.' });
  }
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      throw new Error();
    }
    user.skills = user.skills.concat({ rating, skill });
    user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
};
exports.updateUserSkills = async (req, res) => {
  const _id = req.params.id;
  const { rating, skill } = req.body;
  if (!rating || !skill) {
    return res.status(406).json({ msg: 'fill all fields.' });
  }
  const data = { 'skills.$.rating': rating, 'skills.$.skill': skill };
  await updateDbArrayObj(res, data, { 'skills._id': _id }, User);
};

exports.deleteUserSkills = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findOneAndUpdate(
      _id,
      { $pull: { skills: { _id } } },
      { new: true }
    );
    if (!user) {
      throw new Error();
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
};
