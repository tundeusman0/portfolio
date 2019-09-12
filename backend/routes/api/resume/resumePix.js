const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const Resume = require('../../../models/resume');
const auth = require('../../../middleware/auth');

const router = new express.Router();

const upload = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg)/)) {
      return cb(new Error('Please Upload should be images only'));
    }
    cb(undefined, true);
  }
});

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
    try {
      const buffer = await sharp(req.file.buffer)
        .resize({
          width: 250,
          height: 250
        })
        .png()
        .toBuffer();
      const updatedResume = await Resume.findOneAndUpdate(
        { createdBy: req.user._id },
        { $set: { pix: buffer } },
        { new: true }
      );
      res.set('Content-Type', 'image/jpg');
      res.status(200).send(updatedResume.pix);
    } catch (error) {
      res.status(400).send('Error');
    }
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
  try {
    const resume = await Resume.findOne();
    if (!resume) {
      throw new Error();
    }
    res.set('Content-Type', 'image/jpg');
    res.status(200).send(resume.pix);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
});
module.exports = router;
