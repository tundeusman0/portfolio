import React, { Component } from 'react';
import { connect } from 'react-redux';

class OtherForm extends Component {
  state = {
    school: '',
    grade: '',
    started: '',
    to: '',
    name: '',
    certy: '',
    date: '',
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
    const { school, grade, started, to, name, certy, date } = this.state;
    const edu = {
      school,
      grade,
      started,
      to
    };
    const details = { name, certy, date };
    e.preventDefault();
    if (this.props.formName === 'Post Edu') {
      this.props.submitForm(edu);
    } else {
      this.props.submitForm(details);
    }
  };
  render() {
    return (
      <div>
        <div className="form_wrapper" style={{ margin: '5px' }}>
          <div className="form_container">
            <div className="title_container">
              {this.state.msg && <p>{this.state.msg}</p>}
              <h2>{this.props.formName}</h2>
              <div className="row clearfix">
                <div className="">
                  <form onSubmit={this.onSubmit}>
                    {Object.keys(this.state).map((element, index) =>
                      this.props.formName === 'Post Edu' ? (
                        element !== 'msg' &&
                        element !== 'certy' &&
                        element !== 'name' &&
                        element !== 'date' && (
                          <div key={index} className="input_field">
                            <span>
                              <i
                                aria-hidden="true"
                                className="fas fa-pencil-alt"
                              ></i>
                            </span>
                            <input
                              type="text"
                              placeholder={element}
                              value={this.state[element]}
                              onChange={this.onChange}
                              name={element}
                              required
                            />
                          </div>
                        )
                      ) : this.props.formName === 'Post Prof' ? (
                        element !== 'grade' &&
                        element !== 'school' &&
                        element !== 'started' &&
                        element !== 'to' &&
                        element !== 'msg' &&
                        element !== 'when' && (
                          <div key={index} className="input_field">
                            <span>
                              <i
                                aria-hidden="true"
                                className="fas fa-pencil-alt"
                              ></i>
                            </span>
                            <input
                              type="text"
                              placeholder={element}
                              value={this.state[element]}
                              onChange={this.onChange}
                              name={element}
                              required
                            />
                          </div>
                        )
                      ) : (
                        <h1>Register a form</h1>
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

export default connect(mapStateToProps)(OtherForm);
