const Blog = require('../../../models/blog');

exports.postBlog = async (req, res) => {
  const { headline, detail } = req.body;
  if (!headline || !detail) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  try {
    const blog = new Blog(req.body);
    blog.save();
    res.status(200).json(blog);
  } catch (error) {
    return res.status(400).json({ msg: 'Unable to post Blog' });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json(blog);
  } catch (error) {
    return res.status(400).json({ msg: 'Unable to find Blog' });
  }
};

exports.deleteBlog = async (req, res) => {
  const _id = req.params.id;
  try {
    const updatedBlog = await Blog.findByIdAndRemove(_id);
    if (!updatedBlog) {
      throw new Error();
    }
    res.status(200).json(updatedBlog);
  } catch (error) {
    return res.status(400).json({ msg: 'Unable to delete Blog' });
  }
};

exports.updateBlog = async (req, res) => {
  const { headline, detail } = req.body;
  if (!headline || !detail) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  const _id = req.params.id;
  try {
    const response = await Blog.findOneAndUpdate({ _id }, req.body, {
      new: true
    });
    res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ msg: 'Unable to update Blog' });
  }
};
