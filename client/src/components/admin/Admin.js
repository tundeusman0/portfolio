import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from './../../actions/auth';

const Admin = ({ logOut }) => {
  return (
    <div className="admin">
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

export default connect(
  null,
  { logOut }
)(Admin);
