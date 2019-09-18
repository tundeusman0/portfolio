import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="admin">
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

export default Admin;
