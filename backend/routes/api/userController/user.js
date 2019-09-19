const { getData, updateDbArrayObj } = require('../utils/utils');
const User = require('../../../models/user');

exports.createUser = async (req, res) => {
  if (!req.body) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  try {
    const userExist = await User.find();
    if (userExist.length > 0) {
      throw new Error();
    }
    const user = new User(req.body);
    const token = await user.generateAuthToken();
    const response = await user.save();
    res.status(200).json({ response, token });
  } catch (error) {
    return res.status(400).json({ msg: 'Unable to register' });
  }
};

exports.userAdmin = async (req, res) => {
  await getData(res, User);
};

exports.getUser = async (req, res) => {
  const details = await User.findOne();
  if (!details.isAdmin) {
    throw new Error();
  }
  await getData(res, User);
};

exports.loginUser = async (req, res) => {
  const { password, email } = req.body;
  try {
    if (!password || !email) {
      return res.status(404).json({ msg: 'error' });
    }
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.status(200).json({ user, token });
  } catch (error) {
    return res.status(400).json({ msg: 'Not Authorized' });
  }
};

exports.editUser = async (req, res) => {
  let { email, userName } = req.body;
  if (!email || !userName) {
    return res.status(406).json({ msg: 'fill all fields.' });
  }
  const data = { email, userName };
  await updateDbArrayObj(res, data, req.user._id, User);
};
