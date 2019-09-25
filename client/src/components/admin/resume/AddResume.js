import React from 'react';
import Form from './Form';
import { addResume } from '../../../actions/resume/resume';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AddResume = ({ addResume, history }) => {
  return (
    <div>
      <Link className="link" to="/admin/resume">
        Back to Admin User
      </Link>
      <Form
        formName="Add Resume"
        history={history}
        submitForm={resume => addResume(resume)}
      />
    </div>
  );
};

export default connect(
  null,
  { addResume }
)(AddResume);
