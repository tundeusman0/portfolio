const { updateResume, deleteResume } = require('./utils');

exports.updateResumeTech = async (req, res) => {
  const { logo, name, ability } = req.body;
  if (!logo || !name || !ability) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  const data = { ability, logo, name };
  await updateResume(data, res, 'tech');
};

exports.deleteResumeTech = async (req, res) => {
  const _id = req.params.id;
  await deleteResume(req, _id, res, 'tech');
};
