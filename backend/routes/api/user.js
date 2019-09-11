const express = require('express');
const User = require('../../models/user');
const auth = require('../../middleware/auth');

const router = new express.Router();

// @route POST api/user
// @desc post only one portfolio user
// @access Public
router.post('/', async (req, res) => {
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
});

// @route GET api/user/details
// @desc get portfolio user details
// @access Public
router.get('/details', async (req, res) => {
  try {
    const details = await User.findOne();
    if (!details.isAdmin) {
      throw new Error();
    }
    res.status(200).json(details);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
});

// @router  POST api/user/login
// @desc    login registered porfolio user
// @access  Public
router.post('/login', async (req, res) => {
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
});

// @router PATCH api/user
// @desc update user details
// @access  Private
router.patch('/', auth, (req, res) => {
  res.status(200);
});

module.exports = router;
