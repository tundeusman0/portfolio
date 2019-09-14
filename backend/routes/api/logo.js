const express = require('express');
const Logo = require('../../models/logo');
const auth = require('../../middleware/auth');
// const { uploadImage } = require('./utils/utils');

const router = new express.Router();

// @router POST api/logo
// @desc post logo slogan
// @access PRIVATE
router.post('/', auth, async (req, res) => {
  const { slogan } = req.body;
  if (!slogan) {
    return res.status(406).json({ msg: 'please enter slogan' });
  }
  const logo = await Logo.findOne();
  if (logo) {
    return res.status(409).json({ msg: 'you cannot post' });
  }
  try {
    const slogan = new Logo(req.body);
    slogan.save();
    res.status(201).send(slogan);
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

// router.post('/logo', async (req, res) => {
//   if (!req.file) {
//     return res.status(406).json({ msg: 'Please upload a pictue' });
//   }
//   await uploadImage(req, res, 'logo', Logo, { _id: req.params.id });
//   (error, req, res, next) => {
//     res.status(400).json({
//       error: error.message
//     });
//   };
// });

module.exports = router;
