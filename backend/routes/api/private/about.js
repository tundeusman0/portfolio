const express = require('express');
const About = require('../../../models/about');

const router = new express.Router();

router.post('/', async (req, res) => {
  const about = new About(req.body);
  const response = await about.save();
  res.json(response);
});

module.exports = router;
