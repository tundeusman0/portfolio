const express = require('express');
const Resume = require('../../../models/resume');
const auth = require('../../../middleware/auth');
const { updateResume, deleteResume } = require('./utils');

const router = new express.Router();

// @router POST api/resume/education
// @desc post resume educations
// @access PRIVATE
router.patch('/', auth, async (req, res) => {
  const { school, grade, started, to } = req.body;
  if (!school || !grade || !started || !to) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  await updateResume(started, to, school, grade, res, Resume);
});

// @router DELETE api/resume/eduction/id
// @desc delete user one eduction history
// @access PRIVATE
router.delete('/:id', auth, async (req, res) => {
  const _id = req.params.id;
  await deleteResume(req, _id, res, Resume);
});

module.exports = router;
