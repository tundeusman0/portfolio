import React from 'react';
import { connect } from 'react-redux';
import { postTech, deleteTech } from '../../../actions/resume/ResumeTech';

class ResumeTech extends React.Component {
  state = {
    name: '',
    logo: '',
    ability: '',
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
    const { logo, name, ability } = this.state;
    const tech = { logo, name, ability };
    this.props.postTech(tech);
  };
  render() {
    return (
      <div className="User" style={{ marginTop: '0', marginBottom: '0' }}>
        <div className="form_wrapper" style={{ margin: '5px' }}>
          <div className="form_container">
            <div className="title_container">
              {this.state.msg && <p>{this.state.msg}</p>}
              <h2>Post Tech</h2>
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
                    <input className="button" type="submit" value="Post Tech" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {this.props.tech ? (
            <ul>
              {this.props.tech.map((tec, ind) => (
                <li key={ind} className="list-item">
                  Name: {tec.name} <div></div> Ability:{' '}
                  <span> {tec.ability}</span>
                  <div></div>logo: <span>{tec.logo}</span>
                  <button onClick={() => this.props.deleteTech(tec._id)}>
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
  tech: state.resume.resume.tech,
  error: state.authError
});

export default connect(
  mapStateToProps,
  { postTech, deleteTech }
)(ResumeTech);
