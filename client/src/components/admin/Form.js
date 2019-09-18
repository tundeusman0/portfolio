import React, { Component } from 'react';

class Form extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    password2: '',
    msg: null
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    const { userName, email, password, password2, msg } = this.state;
    e.preventDefault();
    if (this.props.formName === 'Register') {
      if (password !== password2) {
        this.setState({ msg: 'Password do not match' });
      } else {
        this.setState({ msg: '' });
        console.log(userName, email, password, msg);
      }
    }
    if (this.props.formName === 'Login') {
      console.log(userName, email, password);
    }
  };
  render() {
    return (
      <div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              {this.state.msg && <p>{this.state.msg}</p>}
              <h2>{this.props.formName}</h2>
              <div className="row clearfix">
                <div className="">
                  <form onSubmit={this.onSubmit}>
                    {this.props.formName === 'Register' && (
                      <div className="input_field">
                        <span>
                          <i aria-hidden="true" className="fa fa-user"></i>
                        </span>
                        <input
                          autoFocus={true}
                          type="text"
                          placeholder="userName"
                          value={this.state.userName}
                          onChange={this.onChange}
                          name="userName"
                          required
                        />
                      </div>
                    )}
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
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-envelope"></i>
                      </span>
                      <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password"
                        required
                      />
                    </div>
                    {this.props.formName === 'Register' && (
                      <div className="input_field">
                        <span>
                          <i aria-hidden="true" className="fa fa-envelope"></i>
                        </span>
                        <input
                          type="password"
                          placeholder="Confirm password"
                          value={this.state.password2}
                          onChange={this.onChange}
                          name="password2"
                          required
                        />
                      </div>
                    )}
                    <input
                      className="button"
                      type="submit"
                      value={this.props.formName}
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
export default Form;
