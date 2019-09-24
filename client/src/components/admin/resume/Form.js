import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  state = {
    about: '',
    experience: '',
    carrerGoal: '',
    name: '',
    jobTitle: '',
    addTitle: '',
    phone: '',
    email: '',
    location: '',
    msg: null
  };
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'Resume Fail') {
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
        this.props.history.push('/admin/resume');
        console.log("push oh")
      }
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    const {
      about,
      experience,
      carrerGoal,
      name,
      jobTitle,
      addTitle,
      phone,
      email,
      location
    } = this.state;
    const resume = {
      about,
      experience,
      carrerGoal,
      name,
      jobTitle,
      addTitle,
      phone,
      email,
      location
    };
    e.preventDefault();
    this.props.submitForm(resume);
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
                    {Object.keys(this.state).map(
                      (element, index) =>
                        element !== 'msg' && (
                          <div key={index} className="input_field">
                            <span>
                              <i
                                aria-hidden="true"
                                className="fas fa-pencil-alt"
                              ></i>
                            </span>
                            <input
                              autoFocus={true}
                              type="text"
                              placeholder={element}
                              value={this.state.element}
                              onChange={this.onChange}
                              name={element}
                              required
                            />
                          </div>
                        )
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

const mapStateToProps = state => ({
  error: state.authError
});

export default connect(mapStateToProps)(Form);
