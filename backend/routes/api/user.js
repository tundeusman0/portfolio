const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const User = require('../../models/user');
const auth = require('../../middleware/auth');

const router = new express.Router();

// @route POST api/user
// @desc post only one portfolio user
// @access Public
router.post('/', async (req, res) => {
  if (!req.body) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  try {
    const userExist = await User.find();
    if (userExist.length > 0) {
      throw new Error();
    }
    const user = new User(req.body);
    const token = await user.generateAuthToken();
    const response = await user.save();
    res.status(200).json({ response, token });
  } catch (error) {
    return res.status(400).json({ msg: 'Unable to register' });
  }
});

// @route GET api/user/details
// @desc get portfolio user details
// @access Public
router.get('/details', async (req, res) => {
  try {
    const details = await User.findOne();
    if (!details.isAdmin) {
      throw new Error();
    }
    res.status(200).json(details);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
});

// @router  POST api/user/login
// @desc    login registered porfolio user
// @access  Public
router.post('/login', async (req, res) => {
  const { password, email } = req.body;
  try {
    if (!password || !email) {
      return res.status(404).json({ msg: 'error' });
    }
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.status(200).json({ user, token });
  } catch (error) {
    return res.status(400).json({ msg: 'Not Authorized' });
  }
});

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

// @router PATCH api/user/homePix
// @desc update user home picture
// @access  Private
router.patch(
  '/homePix',
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
      req.user.homePix = buffer;
      const user = await User.findByIdAndUpdate(
        req.user._id,
        { $set: { homePix: req.user.homePix } },
        { new: true }
      );
      res.set('Content-Type', 'image/jpg');
      res.status(200).send(user.homePix);
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

// @router GET api/user/homePix
// @desc   get portfolio home picture
// @access Public
router.get('/homePix', async (req, res) => {
  try {
    const user = await User.findOne();
    if (!user.isAdmin) {
      throw new Error();
    }
    res.set('Content-Type', 'image/jpg');
    res.status(200).send(user.homePix);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
});

// @router Patch api/user/status
// @desc update status and info
// @access PRIVATE
router.patch('/status', auth, async (req, res) => {
  let { info, status } = req.body;
  if (typeof status !== 'boolean') {
    return res.status(406).json({ msg: 'fill all fields.' });
  }
  if (!info) {
    !req.user.info ? (info = 'No info') : (info = req.user.info);
  }
  try {
    const UpdatedStatus = await User.findByIdAndUpdate(
      req.user._id,
      { $set: { info, status } },
      { new: true }
    );
    res.status(200).send(UpdatedStatus);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
});

// @router PATCH api/user
// @desc update user details
// @access PRIVATE
router.patch('/', auth, async (req, res) => {
  let { email, userName } = req.body;
  if (!email || !userName) {
    return res.status(406).json({ msg: 'fill all fields.' });
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $set: { email, userName } },
      { new: true }
    );
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
});

// @router POST api/user/skills
// @desc post user skills
// @access PRIVATE
router.post('/skills', auth, async (req, res) => {
  const { rating, skill } = req.body;
  if (!rating || !skill) {
    return res.status(406).json({ msg: 'fill all fields.' });
  }
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      throw new Error();
    }
    user.skills = user.skills.concat({ rating, skill });
    user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
});

// @router PATCH api/user/skills
// @desc update user skills
// @access PRIVATE
router.patch('/skills/:id', auth, async (req, res) => {
  const _id = req.params.id;
  const { rating, skill } = req.body;
  if (!rating || !skill) {
    return res.status(406).json({ msg: 'fill all fields.' });
  }
  try {
    const user = await User.findOneAndUpdate(
      { 'skills._id': _id },
      { $set: { 'skills.$.rating': rating, 'skills.$.skill': skill } },
      { new: true }
    );
    if (!user) {
      throw new Error();
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
});

// @router DELETE api/user/skills
// @desc delete user skills
// @access PRIVATE
router.delete('/skills/:id', auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findOneAndUpdate(_id, {$pull: { skills: { _id } }},{new:true});
    if (!user) {
      throw new Error();
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
});

module.exports = router;
