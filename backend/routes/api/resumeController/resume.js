const { getData } = require('../utils/utils');
const { checkInput } = require('./utils');
const Resume = require('../../../models/resume');

exports.createResume = async (req, res) => {
  const data = await checkInput(req, res);
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
};

exports.getResume = async (req, res) => {
  await getData(res, Resume);
};

exports.editResume = async (req, res) => {
  const data = await checkInput(req, res);
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
};
