const express = require('express');
const auth = require('../../middleware/auth');
const blog = require('./blogController/blog');

const router = new express.Router();

// @router POST api/blog
// @desc post a blog
// @access PRIVATE
router.post('/', auth, blog.postBlog);

// @router GET api/blog
// @desc get all blogs
// @access PUBLIC
router.get('/', blog.getBlogs);

// @router DELETE api/blog
// @desc get a blog
// @access PRIVATE
router.delete('/:id', auth, blog.deleteBlog);

// @router PATCH api/blog
// @desc update a blog
// @access PRIVATE
router.patch('/:id', auth, blog.updateBlog);

module.exports = router;
