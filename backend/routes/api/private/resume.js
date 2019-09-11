const express = require('express');
const Resume = require('../../../models/resume');

const router = new express.Router();

router.post('/', async (req, res) => {
  const resume = new Resume(req.body);
  const response = await resume.save();
  res.json(response);
});

module.exports = router;
