import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editBlog } from '../../../actions/blog/blog';
import LogoPix from '../UploadPix';
import { postBlogImage } from '../../../actions/blog/blog';
import RichEditor from './RichEditor';

const EditBlog = ({ blog, match, history, editBlog, postBlogImage }) => {
  return (
    <div className="Editor">
      <Link className="editorTag" to="/admin/blog">
        TO BLOGS
      </Link>
      <LogoPix
        pixSrc={`/api/blog/pix/${match.params.id}`}
        formName="Update Pix"
        postImage={file => postBlogImage({ id: match.params.id, file })}
      />
      <RichEditor
        formName="Edit Blog"
        id={match.params.id}
        history={history}
        blog={blog}
        formSubmit={blog => editBlog({ id: match.params.id, updates: blog })}
      />
    </div>
  );
};

const mapStateToProps = (state, { match }) => ({
  blog: state.blog.blogs.find(blog => blog._id === match.params.id)
});

export default connect(
  mapStateToProps,
  { editBlog, postBlogImage }
)(EditBlog);
