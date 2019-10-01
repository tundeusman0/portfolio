import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from './Form';
import { addBlog } from './../../../actions/blog/blog';

const AddBlog = ({ addBlog, history }) => {
  return (
    <div className="User arrange" style={{ marginTop: '0', marginBottom: '0' }}>
      <Link to="/admin/blog">TO BLOGS</Link>
      <Form
        formName="Add a Blog"
        history={history}
        formSubmit={blog => addBlog(blog)}
      />
    </div>
  );
};

export default connect(
  null,
  { addBlog }
)(AddBlog);
