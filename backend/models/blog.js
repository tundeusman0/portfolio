const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  pix: {
    type: Buffer
  },
  headline: {
    type: String
  },
  detail: String,
  comments: [
    {
      name: String,
      comment: String
    }
  ]
});

BlogSchema.methods.toJSON = function() {
  const blog = this;
  const blogObject = blog.toObject();
  delete blogObject.pix;
  return blogObject;
};
const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
