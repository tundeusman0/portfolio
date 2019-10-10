import React from 'react';
import { connect } from 'react-redux';
import OtherForm from './OtherForm';
import { postProf, deleteProf } from '../../../actions/resume/ResumeProf';

const ResumeProf = ({ postProf, profs, history, deleteProf }) => {
  return (
    <div>
      <OtherForm
        history={history}
        formName="Post Prof"
        submitForm={details => postProf(details)}
      />
      <div>
        {profs ? (
          <ul>
            {profs.map((prof, ind) => (
              <li key={ind} className="list-item">
                {prof.name} <span> {prof.certy}</span> date:
                <span>{prof.date}</span>
                <button onClick={() => deleteProf(prof._id)}>
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
};

const mapStateToProps = state => ({
  profs: state.resume.resume && state.resume.resume.proffesionalBody
});

export default connect(
  mapStateToProps,
  { postProf, deleteProf }
)(ResumeProf);
