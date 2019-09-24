import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  state = {
    about: this.props.resume ? this.props.resume.personalProfile.about : '',
    experience: this.props.resume
      ? this.props.resume.personalProfile.experience
      : '',
    carrerGoal: this.props.resume
      ? this.props.resume.personalProfile.carrerGoal
      : '',
    name: this.props.resume ? this.props.resume.details.name : '',
    jobTitle: this.props.resume ? this.props.resume.details.jobTitle : '',
    addTitle: this.props.resume ? this.props.resume.details.addTitle : '',
    phone: this.props.resume ? this.props.resume.contact.phone : '',
    email: this.props.resume ? this.props.resume.contact.email : '',
    location: this.props.resume ? this.props.resume.contact.location : '',
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
    if (this.props.formName === 'Edit form') {
      this.props.submitForm(resume);
    } else {
      this.props.submitForm(resume);
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
                              value={this.state[element]}
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
