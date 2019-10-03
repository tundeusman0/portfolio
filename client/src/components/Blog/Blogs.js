import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleBlog from './Blog';

const Blog = ({ blogs }) => {
  return (
    <div className="blog">
      <div className="blog-header">
        <h1>TECH POSTS</h1>
      </div>
      <div className="blog-news">
        {blogs ? (
          blogs.map(blog => (
            <div key={blog._id} className="blog-new">
              <Link to={`/blog/${blog._id}`}>
                <SingleBlog
                  id={blog._id}
                  headline={blog.headline}
                  details={blog.detail}
                />
              </Link>
            </div>
          ))
        ) : (
          <p>No Blogs</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  blogs: state.blog.blogs
});
export default connect(mapStateToProps)(Blog);
