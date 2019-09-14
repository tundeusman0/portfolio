const express = require('express');
const auth = require('../../middleware/auth');
const blog = require('./blogController/blog');
const blogPix = require('./blogController/blogPix');
const blogComm = require('./blogController/blogComments');
const { multerUpload } = require('./utils/utils');

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

// enable multer settings
const upload = multerUpload(1000000);

// @router POST api/blog/pix/id
// @desc post a blog pix
// @access PRIVATE
router.post('/pix/:id', auth, upload.single('upload'), blogPix.postPix);

// @router GET api/blog/pix/id
// @desc get a blog pix
// @access PUBLIC
router.get('/pix/:id', blogPix.getPix);

// @router POST api/blog/comment/id
// @desc post a blog comment
// @access PUBLIC
router.post('/comment/:id', blogComm.postComment);

module.exports = router;
