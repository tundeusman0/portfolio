exports.updateResume = async function updateResume(
  started,
  to,
  school,
  grade,
  res,
  Resume
) {
  try {
    const resume = await Resume.findOne();
    resume.education = resume.education.concat({
      date: { started, to },
      school,
      grade
    });
    resume.save();
    res.status(200).send(resume);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
};

exports.deleteResume = async function deleteResume(req, _id, res, Resume) {
  try {
    const resume = await Resume.findOneAndUpdate(
      { createdBy: req.user._id },
      { $pull: { education: { _id } } },
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
