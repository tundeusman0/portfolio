const express = require('express');
const Resume = require('../../../models/resume');
const auth = require('../../../middleware/auth');
const { updateResume, deleteResume } = require('./utils');
const { updateDbArrayObj } = require('../utils/utils');

const router = express.Router();

//  @router PATCH api/resume/projects
//  @desc update projects
//  @access PRIVATE
router.post('/', auth, async (req, res) => {
  let { name, desc, link, codeLink, tech } = req.body;
  if (!codeLink) {
    codeLink = '';
  }
  const data = {
    name,
    details: { desc, link, codeLink },
    tech
  };
  if (!name || !desc || !link || !tech) {
    return res.status(409).json('fill all fields');
  }
  await updateResume(data, res, 'projects');
});

// @router DELETE api/resume/projects/id
// @desc delete one project
// @access PRIVATE
router.delete('/:id', auth, async (req, res) => {
  const _id = req.params.id;
  await deleteResume(req, _id, res, 'projects');
});

// @router PATCH api/resume/projects/id
// @desc update a project
// @access PRIVATE
router.patch('/:id', auth, async (req, res) => {
  const _id = req.params.id;
  let { name, desc, link, codeLink, tech } = req.body;
  if (!codeLink) {
    codeLink = '';
  }
  if (!name || !desc || !link || !tech) {
    return res.status(409).json('fill all fields');
  }
  const details = { desc, link, codeLink };
  const data = {
    'projects.$.name': name,
    'projects.$.tech': tech,
    'projects.$.details': details
  };
  const projectid = { 'projects._id': _id };
  await updateDbArrayObj(res, data, projectid, Resume);
});

module.exports = router;
