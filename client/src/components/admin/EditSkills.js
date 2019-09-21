import React from 'react';
import { connect } from 'react-redux';
import Skills from './Skills';

const EditSkills = ({ history, match, skills }) => {
  return (
    <div>
      <Skills
        formName="Edit Skill"
        id={match.params.id}
        history={history}
        skills={skills}
      />
    </div>
  );
};

const mapStateToProps = (state, { match }) => ({
  skills: state.auth.user.skills.find(skill => skill._id === match.params.id)
});
export default connect(mapStateToProps)(EditSkills);
