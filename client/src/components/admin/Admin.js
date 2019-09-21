import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from './../../actions/auth';

const Admin = ({ logOut, error }) => {
  const state = {
    msg: error.id ? error.msg : null
  };
  return (
    <div className="admin">
      {state.msg && (
        <p style={{ fontSize: '20px', color: 'white' }}>{state.msg}</p>
      )}
      <button onClick={() => logOut()}>Log Out</button>
      <div className="User">
        <Link to="/admin/user">User</Link>
      </div>
      <div className="User">
        <Link to="/admin/resume">Resume</Link>
      </div>
      <div className="User">
        <Link to="/admin/logo">logo</Link>
      </div>
      <div className="User">
        <Link to="/admin/blog">Blog</Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.authError
});
export default connect(
  mapStateToProps,
  { logOut }
)(Admin);
