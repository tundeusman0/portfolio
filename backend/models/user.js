const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  pix: {
    type: Buffer
  },
  info: {
    type: String
  },
  status: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  skills: [
    {
      skill: {
        type: String
      },
      rating: {
        type: Number
      }
    }
  ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
