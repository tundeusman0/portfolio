const express = require('express');
const auth = require('../../middleware/auth');
const resume = require('./resumeController/resume');
const resumePix = require('./resumeController/resumepix');
const resumeEdu = require('./resumeController/education');
const resumeProff = require('./resumeController/proffesionalBody');
const resumeRef = require('./resumeController/reference');
const resumeProj = require('./resumeController/projects');
const resumeTech = require('./resumeController/tech');
const resumeSoc = require('./resumeController/social');
const { multerUpload } = require('./utils/utils');

const router = new express.Router();

// @router POST api/resume
// @desc create a resume
// @access PRIVATE
router.post('/', auth, resume.createResume);

// @router GET api/resume
// @desc get the resume
// @access PUBLIC
router.get('/', resume.getResume);

// @router PATCH api/resume
// @desc update the resume
// @access PRIVATE
router.patch('/', auth, resume.editResume);

// enable multer settings
const upload = multerUpload(1000000);

// @router PATCH api/resume/pix
// @desc update resume picture
// @access  Private
router.patch('/pix', auth, upload.single('upload'), resumePix.updateResumePix);

// @router GET api/resume/pix
// @desc   get resume picture
// @access Public
router.get('/pix', resumePix.getResumePix);

// @router POST api/resume/education 
// @desc post resume educations
// @access PRIVATE
router.patch('/education', auth, resumeEdu.updateResumeEdu);

// @router DELETE api/resume/eduction/id
// @desc delete user one eduction history
// @access PRIVATE
router.delete('/education/:id', auth, resumeEdu.deleteResumeEdu);

// @router PATCH api/resume/professional
// @desc post resume professional body
// @access PRIVATE
router.patch('/professional', auth, resumeProff.updateResumeProff);

// @router DELETE api/resume/professional/id
// @desc delete user one professional body history
// @access PRIVATE
router.delete('/professional/:id', auth, resumeProff.deleteResumeProff);

// @router PATCH api/resume/reference
// @desc post a resume reference
// @access PRIVATE
router.patch('/reference', auth, resumeRef.updateResumeRef);

// @router DELETE api/resume/reference/id
// @desc delete one resume reference
// @access PRIVATE
router.delete('/reference/:id', auth, resumeRef.deleteResumeRef);

//  @router PATCH api/resume/projects
//  @desc update projects
//  @access PRIVATE
router.post('/projects', auth, resumeProj.postResumeProj);
// @router DELETE api/resume/projects/id
// @desc delete one project
// @access PRIVATE
router.delete('/projects/:id', auth, resumeProj.deleteResumeProj);
// @router PATCH api/resume/projects/id
// @desc update a project
// @access PRIVATE
router.patch('/projects/:id', auth, resumeProj.updateResumeProj);

// @router POST api/resume/tech
// @desc post resume tech
// @access PRIVATE
router.patch('/tech', auth, resumeTech.updateResumeTech);

// @router DELETE api/resume/tech/id
// @desc delete user one tech history
// @access PRIVATE
router.delete('/tech/:id', auth, resumeTech.deleteResumeTech);

// @router POST api/resume/social
// @desc post resume social
// @access PRIVATE
router.patch('/social', auth, resumeSoc.updateResumeSoc);

// @router DELETE api/resume/social/id
// @desc delete user one social history
// @access PRIVATE
router.delete('/social/:id', auth, resumeSoc.deleteResumeSoc);

module.exports = router;
