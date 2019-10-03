import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBlog } from './../../../actions/blog/blog';
import RichEditor from './RichEditor';

const AddBlog = ({ addBlog, history }) => {
  return (
    <div className="Editor">
      <Link className="editorTag" to="/admin/blog">
        TO BLOGS
      </Link>
      <RichEditor
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
