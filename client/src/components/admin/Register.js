import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { registerUser } from './../../actions/auth';

const Register = ({ registerUser, history }) => {
  return (
    <div>
      <Form
        formName="Register"
        history={history}
        submitForm={user => registerUser(user)}
      />
    </div>
  );
};

export default connect(
  null,
  { registerUser }
)(Register);
