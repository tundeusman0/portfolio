const { updateResume, deleteResume } = require('./utils');

exports.updateResumeSoc = async (req, res) => {
  const { logo, name, link } = req.body;
  if (!logo || !name || !link) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  const data = { link, logo, name };
  await updateResume(data, res, 'social');
};

exports.deleteResumeSoc = async (req, res) => {
  const _id = req.params.id;
  await deleteResume(req, _id, res, 'social');
};
