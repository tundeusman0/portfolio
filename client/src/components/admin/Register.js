import React from 'react';
import Form from './Form';
import { registerUser } from './../../actions/auth';

const Register = () => {
  return (
    <div>
      <Form formName="Register" registerUser={user => registerUser(user)} />
    </div>
  );
};

export default Register;
