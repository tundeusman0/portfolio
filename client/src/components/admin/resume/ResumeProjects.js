import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import {
  postProjects,
  deleteProjects
} from '../../../actions/resume/ResumeProj';

const ResumeProjects = ({
  projects,
  postProjects,
  history,
  deleteProjects
}) => {
  return (
    <div>
      <ProjectForm
        formName="Post Project"
        submitForm={proj => postProjects(proj)}
        history={history}
      />
      <div>
        {projects ? (
          <ul>
            {projects.map((project, ind) => (
              <li
                key={ind}
                className="list-item"
                style={{ justifyContent: 'space-around' }}
              >
                <Link
                  style={{ fontSize: '20px' }}
                  to={`/admin/projects/${project._id}`}
                >
                  Name: {project.name}
                  <div></div> Tech: <span> {project.tech}</span>
                  <div></div> Desc: <span>{project.details.desc}</span>
                  <div></div>Code Link: <span>{project.details.codeLink}</span>
                  <div></div> Link: <span>{project.details.link}</span>
                </Link>
                <button onClick={() => deleteProjects(project._id)}>
                  Delete Prject
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h2>No Projects</h2>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  projects: state.resume.resume && state.resume.resume.projects
});

export default connect(
  mapStateToProps,
  { postProjects, deleteProjects }
)(ResumeProjects);
