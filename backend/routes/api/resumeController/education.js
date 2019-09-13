const { updateResume, deleteResume } = require('./utils');

exports.updateResumeEdu = async (req, res) => {
  const { school, grade, started, to } = req.body;
  if (!school || !grade || !started || !to) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  const data = {
    date: { started, to },
    school,
    grade
  };
  await updateResume(data, res, 'education');
};

exports.deleteResumeEdu = async (req, res) => {
  const _id = req.params.id;
  await deleteResume(req, _id, res, 'education');
};
