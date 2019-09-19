const express = require('express');
const { multerUpload } = require('./utils/utils');
const auth = require('../../middleware/auth');
const userPix = require('./userController/userPix');
const user = require('./userController/user');
const userStatus = require('./userController/userStatus');
const userSkills = require('./userController/userSkills');

const router = new express.Router();

// @route POST api/user
// @desc post only one portfolio user
// @access Public
router.post('/', user.createUser);

// @route GET api/user
// @desc get access to portfolio user
// @access Private
router.get('/', auth, user.userAdmin);

// @route GET api/user/details
// @desc get portfolio user details
// @access Public
router.get('/details', user.getUser);

// @router  POST api/user/login
// @desc    login registered porfolio user
// @access  Public
router.post('/login', user.loginUser);

// enable multer settings
const upload = multerUpload(10000000);

// @router PATCH api/user/homePix
// @desc update user home picture
// @access  Private
router.patch('/homePix', auth, upload.single('upload'), userPix.updateUserPix);

// @router GET api/user/homePix
// @desc   get portfolio home picture
// @access Public
router.get('/homePix', userPix.getUserPix);

// @router Patch api/user/status
// @desc update status and info
// @access PRIVATE
router.patch('/status', auth, userStatus.updateUserstatus);

// @router PATCH api/user
// @desc update user details
// @access PRIVATE
router.patch('/', auth, user.editUser);

// @router POST api/user/skills
// @desc post user skills
// @access PRIVATE
router.post('/skills', auth, userSkills.postUserSkills);

// @router PATCH api/user/skills
// @desc update user skills
// @access PRIVATE
router.patch('/skills/:id', auth, userSkills.updateUserSkills);

// @router DELETE api/user/skills
// @desc delete user skills
// @access PRIVATE
router.delete('/skills/:id', auth, userSkills.deleteUserSkills);

module.exports = router;
