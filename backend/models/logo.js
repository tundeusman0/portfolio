const mongoose = require('mongoose');

const LogoSchema = new mongoose.Schema({
  logo: {
    type: Buffer
  },
  slogan: {
    type: String
  }
});

LogoSchema.methods.toJSON = function() {
  const logo = this;
  const logoObject = logo.toObject();
  delete logoObject.logo;
  return logoObject;
};

const Logo = mongoose.model('Logo', LogoSchema);

module.exports = Logo;
