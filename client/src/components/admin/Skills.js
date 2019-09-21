import React from 'react';
import { connect } from 'react-redux';
import { postSkills, deleteSkills } from '../../actions/user';

class Skills extends React.Component {
  state = {
    skill: '',
    rating: ''
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitForm = e => {
    e.preventDefault();
    const { skill, rating } = this.state;
    const skills = { skill, rating };
    this.props.postSkills(skills);
    this.props.history.push('/admin/user');
  };
  render() {
    return (
      <div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <div className="row clearfix">
                <div className="">
                  <form onSubmit={this.submitForm}>
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        autoFocus={true}
                        type="text"
                        placeholder="Skill"
                        value={this.state.skill}
                        onChange={this.onChange}
                        name="skill"
                        required
                      />
                    </div>
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="number"
                        placeholder="Rating"
                        value={this.state.rating}
                        onChange={this.onChange}
                        name="rating"
                        required
                      />
                    </div>
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

export default connect(
  null,
  { postSkills, deleteSkills }
)(Skills);
