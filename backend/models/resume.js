const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  pix: Buffer,
  details: {
    name: String,
    jobTitle: String,
    addTitle: String
  },
  contact: {
    phone: Number,
    email: String,
    location: String
  },
  education: [
    {
      date: {
        from: String,
        to: String
      },
      school: String,
      grade: String
    }
  ],
  proffesionalBody: [
    {
      name: String,
      certy: String,
      date: String
    }
  ],
  projects: [
    {
      name: String,
      details: [
        {
          desc: String,
          link: String,
          codeLink: String
        }
      ],
      tech: [
        {
          type: String
        }
      ]
    }
  ],
  personalProfile: {
    about: String,
    experience: String,
    carrerGoal: String
  },
  tech: [
    {
      logo: String,
      Name: String,
      ability: String
    }
  ],
  social: [
    {
      logo: String,
      Name: String,
      link: String
    }
  ],
  reference: [
    {
      name: String,
      post: String,
      workPlace: String,
      email: String
    }
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const Resume = mongoose.model('Resume', ResumeSchema);

module.exports = Resume;