const express = require('express');
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
  const data = {
    date: { started, to },
    school,
    grade
  };
  await updateResume(data, res, 'education');
});

// @router DELETE api/resume/eduction/id
// @desc delete user one eduction history
// @access PRIVATE
router.delete('/:id', auth, async (req, res) => {
  const _id = req.params.id;
  await deleteResume(req, _id, res, 'education');
});

module.exports = router;
