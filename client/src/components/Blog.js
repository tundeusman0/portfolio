import React from 'react';
import BlogForm from './BlogForm';

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-header">
        <h1>TECH POSTS</h1>
      </div>
      <div className="blog-news">
        <div className="blog-new">
          <a href="/">
            <p>
              The line-clamp property truncates text at a specific number of
              lines. The spec for it is currently an Editor's Draft.
            </p>
          </a>
        </div>
        <div className="blog-new">
          <a href="/">
            <p>
              The line-clamp property truncates text at a specific number of
              lines. The spec for it is currently an Editor's Draft.
            </p>
          </a>
        </div>
        <div className="blog-new">
          <a href="/">
            <p>
              The line-clamp property truncates text at a specific number of
              lines. The spec for it is currently an Editor's Draft.
            </p>
          </a>
        </div>
      </div>
      <div className="blog-form">
        <BlogForm />
      </div>
    </div>
  );
};

export default Blog;
