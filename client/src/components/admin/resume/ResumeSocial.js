import React from 'react';
import { connect } from 'react-redux';
import { postSocial, deleteSocial } from '../../../actions/resume/ResumeSocial';

class ResumeTech extends React.Component {
  state = {
    name: '',
    logo: '',
    link: '',
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
    const { logo, name, link } = this.state;
    const social = { logo, name, link };
    this.props.postSocial(social);
  };
  render() {
    return (
      <div className="User" style={{ marginTop: '0', marginBottom: '0' }}>
        <div className="form_wrapper" style={{ margin: '5px' }}>
          <div className="form_container">
            <div className="title_container">
              {this.state.msg && <p>{this.state.msg}</p>}
              <h2>Post Socials</h2>
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
                      value="Post Socials"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {this.props.socials ? (
            <ul>
              {this.props.socials.map((soc, ind) => (
                <li key={ind} className="list-item">
                  Name: {soc.name} <div></div> Logo: <span> {soc.logo}</span>
                  <div></div>Link: <span>{soc.link}</span>
                  <button onClick={() => this.props.deleteSocial(soc._id)}>
                    Delete Tech
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
  socials: state.resume.resume.social,
  error: state.authError
});

export default connect(
  mapStateToProps,
  { postSocial, deleteSocial }
)(ResumeTech);
