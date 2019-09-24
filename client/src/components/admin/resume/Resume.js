import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="User">
      <Link to="/admin/admin">Back to Admin User</Link>
      Add Resume Here 
      <Link to="/admin/add_resume">Add Resume</Link>
      Edit Resume Here
      <Link to="/admin/edit_resume">Add Resume</Link>
    </div>
  );
};

export default Resume;
