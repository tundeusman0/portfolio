import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import OtherForm from './OtherForm';
import { postEdu } from '../../../actions/resume';

const ResumeEdu = ({ postEdu, edus, history }) => {
  return (
    <div className="User">
      <OtherForm
        history={history}
        formName="Post Edu"
        submitForm={edu => postEdu(edu)}
      />
      <div>
        {edus ? (
          <ul>
            {edus.map((edu, ind) => (
              <li key={ind} className="list-item">
                <Link
                  style={{ fontSize: '18px' }}
                  to={`/admin/skills/${edu._id}`}
                >
                  {edu.school} <span>{edu.grade}</span> from:
                  <span>{edu.date.started}</span> to:<span>{edu.date.to}</span>
                </Link>
                <button onClick={() => this.props.deleteSkills(edu._id)}>
                  Delete Educational History
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h2>No Educational History</h2>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  edus: state.resume.resume.education
});

export default connect(
  mapStateToProps,
  { postEdu }
)(ResumeEdu);
