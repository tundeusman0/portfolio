import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editResume } from './../../../actions/resume';

const EditResume = ({ resume, history, editResume }) => {
  return (
    <div>
      <Link className="link" to="/admin/resume">
        Back to Admin User
      </Link>
      <Form
        formName="Edit form"
        resume={resume}
        history={history}
        submitForm={resume => editResume(resume)}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  resume: state.resume.resume
});
export default connect(
  mapStateToProps,
  { editResume }
)(EditResume);
