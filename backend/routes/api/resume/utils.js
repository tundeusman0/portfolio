const Resume = require("../../../models/resume")

exports.updateResume = async function updateResume(
  condition,
  res,
  target
) {
  try {
    const resume = await Resume.findOne();
    resume[target] = resume[target].concat(condition);
    resume.save();
    res.status(200).send(resume);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
};

exports.deleteResume = async function deleteResume(
  req,
  _id,
  res,
  target
) {
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
