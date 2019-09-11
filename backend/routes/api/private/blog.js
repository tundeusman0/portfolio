const express = require('express');
const Blog = require('../../../models/blog');

const router = new express.Router();

router.post('/', async (req, res) => {
  const blog = new Blog(req.body);
  const response = await blog.save();
  res.json(response);
});

module.exports = router;
