import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Comments from './Comments';

class ContactForm extends Component {
  state = {
    img: '',
    msg: null
  };
  componentDidMount() {
    this.props.blog &&
      axios
        .get(`/api/blog/pix/${this.props.blog._id}`)
        .then(res => this.setState({ img: res.data }));
  }
  render() {
    const { blog } = this.props;
    const { img } = this.state;
    return (
      <div>
        <div className="blog">
          <div className="blog-header">
            <h1>TECH POSTS</h1>
          </div>
          <Link to={`/blog`}>Back To blogs</Link>
          {blog ? (
            <div className="blog-view">
              {img && <img src={`/api/blog/pix/${blog._id}`} alt="blog-pix" />}
              <p className="headline">{blog.headline}</p>
              <div
                className="blog-others"
                dangerouslySetInnerHTML={{ __html: blog.detail }}
              />
              <div>
                {blog.comments.map(comment => (
                  <div className="comments" key={comment._id}>
                    <p>{comment.name}</p>
                    <h3>{comment.comment}</h3>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>Wrong Place</p>
          )}
        </div>
        {blog && <Comments id={blog._id} history={this.props.history} />}
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  blog: state.blog.blogs.find(blog => blog._id === match.params.id)
});
export default connect(mapStateToProps)(ContactForm);
