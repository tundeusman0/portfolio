const express = require('express');
const auth = require('../../../middleware/auth');
const { updateResume, deleteResume } = require('./utils');

const router = new express.Router();

// @router PATCH api/resume/reference
// @desc post a resume reference
// @access PRIVATE
router.patch('/', auth, async (req, res) => {
  const { name, post, workPlace, email } = req.body;
  if (!name || !post || !workPlace || !email) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  await updateResume({ name, post, workPlace, email }, res, 'reference');
});

// @router DELETE api/resume/reference/id
// @desc delete one resume reference
// @access PRIVATE
router.delete('/:id', auth, async (req, res) => {
  const _id = req.params.id;
  await deleteResume(req, _id, res, 'reference');
});

module.exports = router;
