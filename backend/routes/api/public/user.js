const express = require('express');
const User = require('../../../models/user');

const router = new express.Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  const response = await user.save();
  res.json(response);
});

module.exports = router;
