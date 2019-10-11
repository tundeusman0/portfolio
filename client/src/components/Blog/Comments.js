import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Comments extends React.Component {
  state = {
    name: '',
    comment: ''
  };
  componentDidMount() {
    // axios.post(`/api/blog/comment/${id}`, comments);
    console.log(this.props);
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    const { name, comment } = this.state;
    const comments = { name, comment };
    const id = this.props.id;
    axios.post(`/api/blog/comment/${id}`, comments).then(res => {
      console.log(res.data);
      this.props.dispatch({ type: 'EDIT_BLOG', payload: res.data });
    });
    this.setState({ name: '', comment: '' });
  };
  render() {
    return (
      <div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Comment</h2>
              <div className="row clearfix">
                <div className="">
                  <form onSubmit={this.onSubmit}>
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.onChange}
                        name="name"
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

export default connect()(Comments);
