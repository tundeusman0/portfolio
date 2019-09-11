const express = require('express');
const Logo = require('../../../models/logo');

const router = new express.Router();

router.post('/', async (req, res) => {
  const logo = new Logo(req.body);
  const response = await logo.save();
  res.json(response);
});

module.exports = router;
