const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  headline: {
    type: String
  },
  extras: [
    {
      likes: [
        {
          type: String
        }
      ],
      hobby: {
        type: String
      }
    }
  ],
  notes: {
    type: String
  },
  activities: {
    type: String
  }
});

const About = mongoose.model('About', AboutSchema);

module.exports = About;
