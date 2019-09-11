const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

UserSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.isAdmin;
  return userObject;
};

UserSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

UserSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = await jwt.sign(
    { _id: user._id.toString() },
    process.env.JWT_SECRET,
    {
      expiresIn: 3600
    }
  );
  return token;
};

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Not Authorized');
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Unable to login');
  }

  return user;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
