import React from 'react';
import { connect } from 'react-redux';
import { postRef } from '../../../actions/resume/ResumeRef';

class ResumeProf extends React.Component {
  state = {
    name: '',
    post: '',
    workPlace: '',
    email: '',
    msg: ''
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
    const { name, post, workPlace, email } = this.state;
    const ref = { name, post, workPlace, email };
    this.props.postRef(ref);
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

        <div>
          {this.props.refs ? (
            <ul>
              {this.props.refs.map((ref, ind) => (
                <li key={ind} className="list-item">
                  Name: {ref.name} POST: <span> {ref.post}</span>
                  Work Place: <span>{ref.workPlace}</span>
                  Email: <span>{ref.email}</span>
                  <button onClick={() => this.deleteRef(ref._id)}>
                    Delete Professional Certificate
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <h2>No Professional Certificate</h2>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  refs: state.resume.resume.reference,
  error: state.authError
});

export default connect(
  mapStateToProps,
  { postRef }
)(ResumeProf);
