const { updateResume, deleteResume } = require('./utils');
const { updateDbArrayObj } = require('../utils/utils');
const Resume = require('../../../models/resume');

exports.postResumeProj = async (req, res) => {
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
};

exports.deleteResumeProj = async (req, res) => {
  const _id = req.params.id;
  await deleteResume(req, _id, res, 'projects');
};

exports.updateResumeProj = async (req, res) => {
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
};
