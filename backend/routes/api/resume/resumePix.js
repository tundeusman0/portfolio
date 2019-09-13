const express = require('express');
const { multerUpload, uploadImage, getImage } = require('../utils/utils');
const Resume = require('../../../models/resume');
const auth = require('../../../middleware/auth');

const router = new express.Router();

// enable multer settings
const upload = multerUpload(1000000);

// @router PATCH api/resume/pix
// @desc update resume picture
// @access  Private
router.patch(
  '/',
  auth,
  upload.single('upload'),
  async (req, res) => {
    if (!req.file) {
      return res.status(406).json({ msg: 'Please upload a pictue' });
    }
    await uploadImage(req, res, 'pix', Resume, { createdBy: req.user._id });
  },
  (error, req, res, next) => {
    res.status(400).json({
      error: error.message
    });
  }
);

// @router GET api/resume/pix
// @desc   get resume picture
// @access Public
router.get('/', async (req, res) => {
  await getImage(res, Resume, 'pix');
});

module.exports = router;
