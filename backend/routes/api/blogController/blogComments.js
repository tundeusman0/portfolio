const Blog = require('../../../models/blog');

exports.postComment = async (req, res) => {
  let { name, comment } = req.body;
  if (!comment) {
    return res.status(406).json({ msg: 'please comment' });
  }
  if (!name) {
    name = 'Anonymous';
  }
  const data = { name, comment };
  try {
    const blog = await Blog.findById(req.params.id);
    blog.comments = blog.comments.concat(data);
    blog.save();
    res.status(200).send(blog);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
};
