const mongoose = require('mongoose');

const LogoSchema = new mongoose.Schema({
  logo: {
    type: Buffer
  },
  slogan: {
    type: String
  }
});

const Logo = mongoose.model('Logo', LogoSchema);

module.exports = Logo;
