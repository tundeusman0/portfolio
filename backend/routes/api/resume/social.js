const express = require('express');
const auth = require('../../../middleware/auth');
const { updateResume, deleteResume } = require('./utils');

const router = express.Router();

// @router POST api/resume/social
// @desc post resume social
// @access PRIVATE
router.patch('/', auth, async (req, res) => {
  const { logo, name, link } = req.body;
  if (!logo || !name || !link) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  const data = { link, logo, name };
  await updateResume(data, res, 'social');
});

// @router DELETE api/resume/eduction/id
// @desc delete user one eduction history
// @access PRIVATE
router.delete('/:id', auth, async (req, res) => {
  const _id = req.params.id;
  await deleteResume(req, _id, res, 'social');
});

module.exports = router;
