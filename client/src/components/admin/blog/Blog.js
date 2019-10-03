import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteBlog } from '../../../actions/blog/blog';

const Blog = ({ blogs, deleteBlog }) => {
  return (
    <div className="User arrange" style={{ marginTop: '0', marginBottom: '0' }}>
      <h1>Blog</h1>
      <Link to="/admin/admin">Back to User Page</Link>
      <Link to="/admin/add_blog">Add Blog</Link>
      {blogs ? (
        <ul>
          {blogs.map((blog, ind) => (
            <li
              key={ind}
              className="list-item"
              style={{ justifyContent: 'space-around' }}
            >
              <Link
                style={{ fontSize: '20px' }}
                to={`/admin/edit_blog/${blog._id}`}
              >
                HeadLine: {blog.headline}
              </Link>
              <button onClick={() => deleteBlog(blog._id)}>Delete Blog</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Blog Post</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  blogs: state.blog.blogs
});

export default connect(
  mapStateToProps,
  { deleteBlog }
)(Blog);
