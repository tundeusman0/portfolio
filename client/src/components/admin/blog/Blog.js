import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Blog = ({ blogs }) => {
  // class Blog extends React.Component {
  // render() {
  console.log(blogs);
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
                to={`/admin/projects/${blog._id}`}
              >
                HeadLine: {blog.headline}
                <div></div> Details: <span> {blog.detail}</span>
              </Link>
              <button>Delete Blog</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Blog Post</p>
      )}
    </div>
  );
};
// }

const mapStateToProps = state => ({
  blogs: state.blog.blogs
});

export default connect(mapStateToProps)(Blog);
