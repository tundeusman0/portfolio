const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  pix: {
    type: Buffer
  },
  headline: {
    type: String
  },
  detail: String
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
