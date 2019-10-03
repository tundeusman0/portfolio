import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContactForm extends Component {
  state = {
    name: '',
    comment: '',
    msg: null
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    const { name, email, comment } = this.state;
    e.preventDefault();
    console.log(name, email, comment);
  };
  componentDidMount() {
    console.log(this.props.blog);
  }
  render() {
    return (
      <div>
        <div className="blog">
          <div className="blog-header">
            <h1>TECH POSTS</h1>
          </div>
          <div className="blog-news"></div>
          <div className="blog-new">
            <p>
              lorem The line-clamp property truncates text at a specific number
              of lines. The spec for it is currently an Editor's Draft The
              line-clamp property truncates text at a specific number of lines.
              The spec for it is currently an Editor's Draft The line-clamp
              property truncates text at a specific number of lines. The spec
              for it is currently an Editor's Draft The line-clamp property
              truncates text at a specific number of lines. The spec for it is
              currently an Editor's Draft The line-clamp property truncates text
              at a specific number of lines. The spec for it is currently an
              Editor's Draft The line-clamp property truncates text at a
              specific number of lines. The spec for it is currently an Editor's
              Draft The line-clamp property truncates text at a specific number
              of lines. The spec for it is currently an Editor's Draft The
              line-clamp property truncates text at a specific number of lines.
              The spec for it is currently an Editor's Draft The line-clamp
              property truncates text at a specific number of lines. The spec
              for it is currently an Editor's Draft The line-clamp property
              truncates text at a specific number of lines. The spec for it is
              currently an Editor's Draft
            </p>
          </div>
        </div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Contact Me</h2>
              <div className="row clearfix">
                <div className="">
                  <form onSubmit={this.onSubmit}>
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        autoFocus={true}
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.onChange}
                        name="name"
                        required
                      />
                    </div>
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                        required
                      />
                    </div>
                    <div className="textarea_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-message"></i>
                      </span>
                      <textarea
                        type="text"
                        placeholder="Your Message."
                        value={this.state.comment}
                        onChange={this.onChange}
                        name="comment"
                        required
                      ></textarea>
                    </div>
                    <input
                      className="button"
                      type="submit"
                      value="Contact Me"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  blog: state.blog.blogs.find(blog => blog._id === match.params.id)
});
export default connect(mapStateToProps)(ContactForm);
