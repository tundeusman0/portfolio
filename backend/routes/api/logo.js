const express = require('express');
const Logo = require('../../models/logo');
const auth = require('../../middleware/auth');
const { uploadImage } = require('./utils/utils');
const { multerUpload } = require('./utils/utils');

const router = new express.Router();

// @router POST api/logo
// @desc post logo slogan
// @access PRIVATE
router.post('/', auth, async (req, res) => {
  const { slogan } = req.body;
  if (!slogan) {
    return res.status(406).json({ msg: 'please enter slogan' });
  }
  try {
    const isLogo = await Logo.findOne();
    let newSlogan = null;
    if (isLogo) {
      newSlogan = await Logo.findOneAndUpdate(
        { slogan: isLogo.slogan },
        { $set: { slogan } }
      );
    }
    newSlogan = new Logo(req.body);
    newSlogan.save();
    res.status(201).send(newSlogan);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
});

// @router GET api/logo
// @desc get logo slogan
// @access PUBLIC
router.get('/', async (req, res) => {
  try {
    const logo = await Logo.findOne();
    if (!logo) {
      throw new Error();
    }
    res.status(200).send(logo);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
});

// enable multer settings
const upload = multerUpload(1000000);

// @router POST api/logo/pix
// @desc post logo pix
// @access PRIVATE
router.post('/pix', auth, upload.single('upload'), async (req, res) => {
  if (!req.file) {
    return res.status(406).json({ msg: 'Please upload a picture' });
  }
  await uploadImage(req, res, 'logo', Logo);
  (error, req, res, next) => {
    res.status(400).json({
      error: error.message
    });
  };
});

// @router GET api/logo/pix
// @desc get logo pix
// @access PUBLIC
router.get('/pix', async (req, res) => {
  try {
    const logo = await Logo.findOne();
    res.set('Content-Type', 'image/jpg');
    res.status(200).send(logo.logo);
  } catch (error) {
    res.status(400).json({ msg: 'Error' });
  }
});

module.exports = router;
