const { updateResume, deleteResume } = require('./utils');

exports.updateResumeRef = async (req, res) => {
  const { name, post, workPlace, email } = req.body;
  if (!name || !post || !workPlace || !email) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  await updateResume({ name, post, workPlace, email }, res, 'reference');
};

exports.deleteResumeRef = async (req, res) => {
  const _id = req.params.id;
  await deleteResume(req, _id, res, 'reference');
};
