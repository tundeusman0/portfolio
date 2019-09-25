import React from 'react';
import { connect } from 'react-redux';
import OtherForm from './OtherForm';
import { postEdu, deleteEdu } from '../../../actions/resume/resume';

const ResumeEdu = ({ postEdu, edus, history, deleteEdu }) => {
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
                {edu.school} <span>{edu.grade}</span> from:
                <span>{edu.date.started}</span> to:<span>{edu.date.to}</span>
                <button onClick={() => deleteEdu(edu._id)}>
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
  { postEdu, deleteEdu }
)(ResumeEdu);
