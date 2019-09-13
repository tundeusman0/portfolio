const { uploadImage, getImage } = require('../utils/utils');

const Resume = require('../../../models/resume');

exports.updateResumePix = async (req, res) => {
  if (!req.file) {
    return res.status(406).json({ msg: 'Please upload a pictue' });
  }
  await uploadImage(req, res, 'pix', Resume, { createdBy: req.user._id });
  (error, req, res, next) => {
    res.status(400).json({
      error: error.message
    });
  };
};

exports.getResumePix = async (req, res) => {
  await getImage(res, Resume, 'pix');
};
