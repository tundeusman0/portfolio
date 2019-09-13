const Resume = require('../../../models/resume');

exports.checkInput = function(req, res) {
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
  return data;
};
exports.updateResume = async function updateResume(condition, res, target) {
  try {
    const resume = await Resume.findOne();
    resume[target] = resume[target].concat(condition);
    resume.save();
    res.status(200).send(resume);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
};

exports.deleteResume = async function deleteResume(req, _id, res, target) {
  try {
    const resume = await Resume.findOneAndUpdate(
      { createdBy: req.user._id },
      { $pull: { [target]: { _id } } },
      { new: true }
    );
    if (!resume) {
      throw new Error();
    }
    res.status(200).send(resume);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
};
