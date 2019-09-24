import React from 'react';
import Form from './Form';
import { addResume } from '../../../actions/resume';
import { connect } from 'react-redux';

const AddResume = ({ addResume, history }) => {
  return (
    <div>
      <Form formName="Add Resume" history={history} submitForm={resume => addResume(resume)} />
    </div>
  );
};

export default connect(
  null,
  { addResume }
)(AddResume);
