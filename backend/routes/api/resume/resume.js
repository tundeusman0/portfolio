const express = require('express');
const Resume = require('../../../models/resume');
const auth = require('../../../middleware/auth');
const { getData } = require('../utils/utils');

const router = new express.Router();

// @router POST api/resume
// @desc create a resume
// @access PRIVATE
router.post('/', auth, async (req, res) => {
  const {
    about,
    experience,
    carrerGoal,
    name,
    jobTitle,
    addTitle,
    phone,
    email,
    location
  } = req.body;
  const createdBy = req.user._id;
  const data = {
    createdBy,
    personalProfile: { about, experience, carrerGoal },
    details: { name, jobTitle, addTitle },
    contact: { phone, email, location }
  };
  if (
    !about ||
    !experience ||
    !carrerGoal ||
    !name ||
    !jobTitle ||
    !addTitle ||
    !phone ||
    !email ||
    !location
  ) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  try {
    const isResume = await Resume.findOne();
    if (isResume) {
      throw new Error();
    }
    const resume = new Resume(data);
    resume.save();
    res.status(200).json(resume);
  } catch (error) {
    return res.status(400).json({ msg: 'Unable to register Resume' });
  }
});

// @router GET api/resume
// @desc get the resume
// @access PUBLIC
router.get('/', async (req, res) => {
  await getData(res, Resume);
});

// @router PATCH api/resume
// @desc update the resume
// @access PRIVATE
router.patch('/', auth, async (req, res) => {
  const {
    about,
    experience,
    carrerGoal,
    name,
    jobTitle,
    addTitle,
    phone,
    email,
    location
  } = req.body;
  const createdBy = req.user._id;
  const data = {
    createdBy,
    personalProfile: { about, experience, carrerGoal },
    details: { name, jobTitle, addTitle },
    contact: { phone, email, location }
  };
  if (
    !about ||
    !experience ||
    !carrerGoal ||
    !name ||
    !jobTitle ||
    !addTitle ||
    !phone ||
    !email ||
    !location
  ) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  try {
    const updatedResume = await Resume.findOneAndUpdate(
      { createdBy: req.user._id },
      { $set: data },
      { new: true }
    );
    res.status(200).send(updatedResume);
  } catch (error) {
    return res.status(400).json({ msg: 'Unable to Update Resume' });
  }
});

module.exports = router;
