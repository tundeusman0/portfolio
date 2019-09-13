const express = require('express');
const auth = require('../../../middleware/auth');
const { updateResume, deleteResume } = require('./utils');

const router = new express.Router();

// @router PATCH api/resume/professional
// @desc post resume professional body
// @access PRIVATE
router.patch('/', auth, async (req, res) => {
  const { name, certy, date } = req.body;
  if (!name || !certy || !date) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }

  await updateResume({ name, certy, date }, res, 'proffesionalBody');
});

// @router DELETE api/resume/professional/id
// @desc delete user one professional body history
// @access PRIVATE
router.delete('/:id', auth, async (req, res) => {
  const _id = req.params.id;
  await deleteResume(req, _id, res, 'proffesionalBody');
});

module.exports = router;
