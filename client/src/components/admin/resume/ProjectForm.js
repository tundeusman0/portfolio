import React from 'react';
import { connect } from 'react-redux';
import { postRef } from '../../../actions/resume/ResumeRef';

class ResumeProf extends React.Component {
  state = {
    name: '',
    desc: '',
    link: '',
    codeLink: '',
    tech: ''
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
    e.preventDefault();
    const { name, desc, link, codeLink, tech } = this.state;
    const proj = { name, desc, link, codeLink, tech };
    this.props.submitForm(proj);
  };
  render() {
    return (
      <div className="User" style={{ marginTop: '0', marginBottom: '0' }}>
        <div className="form_wrapper" style={{ margin: '5px' }}>
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

export default connect(
  mapStateToProps,
  { postRef }
)(ResumeProf);
