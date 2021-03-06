import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    details: '',
    msg: null
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  componentDidMount() {
    this.Interval = setInterval(() => this.setState({ msg: '' }), 4000);
  }
  componentWillUnmount() {
    clearInterval(this.Interval);
  }
  onSubmit = e => {
    const { name, email, details } = this.state;
    e.preventDefault();
    const info = { name, email, details };
    axios
      .post('/api/contact', info)
      .then(() =>
        this.setState({ name: '', email: '', details: '', msg: 'Sent' })
      )
      .catch(() => this.setState({ msg: 'Not Sent' }));
  };
  render() {
    return (
      <div>
        <div className="form_wrapper">
          <div className="form_container">
            {this.state.msg}
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
                        value={this.state.details}
                        onChange={this.onChange}
                        name="details"
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

export default connect()(ContactForm);
