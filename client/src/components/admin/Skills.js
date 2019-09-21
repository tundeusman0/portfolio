import React from 'react';
import { connect } from 'react-redux';
import { postSkills, updateSkills } from '../../actions/skills';

class Skills extends React.Component {
  state = {
    skill: this.props.skills ? this.props.skills.skill : '',
    rating: this.props.skills ? this.props.skills.rating : '',
    id: this.props.skills ? this.props.id : ''
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitForm = e => {
    e.preventDefault();
    const { skill, rating, id } = this.state;
    const skills = { skill, rating };
    const upload = { skills, id };
    if (this.props.formName !== 'Edit Skill') {
      this.props.postSkills(skills);
      this.props.history.push('/admin/user');
    } else {
      this.props.updateSkills(upload);
      this.props.history.push('/admin/user');
    }
  };
  render() {
    return (
      <div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>{this.props.formName}</h2>
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
  { postSkills, updateSkills }
)(Skills);
