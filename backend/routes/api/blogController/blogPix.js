const { uploadImage } = require('../utils/utils');

const Blog = require('../../../models/blog');

exports.postPix = async (req, res) => {
  if (!req.file) {
    return res.status(406).json({ msg: 'Please upload a pictue' });
  }
  await uploadImage(req, res, 'pix', Blog, { _id: req.params.id });
  (error, req, res, next) => {
    res.status(400).json({
      error: error.message
    });
  };
};

exports.getPix = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.set('Content-Type', 'image/jpg');
    res.status(200).send(blog.pix);
  } catch (error) {
    res.status(400).json({ msg: 'Error' });
  }
};
