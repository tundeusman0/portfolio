import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProjectForm from './ProjectForm';

const EditProjects = ({ projects, history, match }) => {
  return (
    <div className="User">
      <Link to="/admin/resume">Back To Resume</Link>
      <ProjectForm
        id={match.params.id}
        projects={projects}
        history={history}
        formName="Edit Project"
      />
    </div>
  );
};

const mapStateToProps = (state, { match }) => ({
  projects: state.resume.resume.projects.find(
    project => project._id === match.params.id
  )
});

export default connect(mapStateToProps)(EditProjects);
