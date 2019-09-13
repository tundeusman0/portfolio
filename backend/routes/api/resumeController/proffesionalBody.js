const { updateResume, deleteResume } = require('./utils');

exports.updateResumeProff = async (req, res) => {
  const { name, certy, date } = req.body;
  if (!name || !certy || !date) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }

  await updateResume({ name, certy, date }, res, 'proffesionalBody');
};

exports.deleteResumeProff = async (req, res) => {
  const _id = req.params.id;
  await deleteResume(req, _id, res, 'proffesionalBody');
};
