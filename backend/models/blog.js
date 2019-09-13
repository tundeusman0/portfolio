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

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
