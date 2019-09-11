const express = require('express');
const User = require('../../models/user');

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
    const response = await user.save();
    res.json(response);
  } catch (error) {
    return res.status(400).json({ msg: 'Unable to register' });
  }
});

// @route GET api/details
// @desc get portfolio user details
// @access Public
router.get('/details', async (req, res) => {
  try {
    const details = await User.find();
    if (!details[0].isAdmin) {
      throw new Error();
    }
    res.status(200).json(details[0]);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
});

module.exports = router;
