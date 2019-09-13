const express = require('express');
const auth = require('../../../middleware/auth');
const { updateResume, deleteResume } = require('./utils');

const router = express.Router();

// @router POST api/resume/tech
// @desc post resume tech
// @access PRIVATE
router.patch('/', auth, async (req, res) => {
  const { logo, name, ability } = req.body;
  if (!logo || !name || !ability) {
    return res.status(404).json({ msg: 'Please fill all fields' });
  }
  const data = { ability, logo, name };
  await updateResume(data, res, 'tech');
});

// @router DELETE api/resume/eduction/id
// @desc delete user one eduction history
// @access PRIVATE
router.delete('/:id', auth, async (req, res) => {
  const _id = req.params.id;
  await deleteResume(req, _id, res, 'tech');
});

module.exports = router;
