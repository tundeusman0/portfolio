import React from 'react';

const resumeHeader = ({
  details,
  education,
  proffesionalBody,
  projects,
  personalProfile
}) => {
  return (
    <div className="resume-info">
      <div className="resume-header">
        <div className="resume-pix">
          <img src={'/api/resume/pix'} alt="pix" />
        </div>
        {details && (
          <div className="resume-header-info">
            <h1>{details.name}</h1>
            <h2>{details.jobTitle}</h2>
            <h3>{details.addTitle}</h3>
          </div>
        )}
      </div>
      <div className="resume-header-edu-title">
        <h3>Education</h3>
      </div>
      {education && (
        <div className="resume-header-edu">
          {education.map(edu => (
            <div key={edu.school} className="resume-header-edu-item">
              <span className="resume-edu-date">
                {edu.date.started}-{edu.date.to}
              </span>
              <div className="resume-edu-name">
                {edu.school}
                <span>{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {proffesionalBody && (
        <div className="resume-pro-certy">
          {proffesionalBody.map(prof => (
            <p key={prof.name}>
              PROFESSIONAL BODY MEMBERSHIP:
              <span className="resume-pro-certy-name">{prof.name}</span>
            </p>
          ))}
        </div>
      )}

      <div className="projects">
        <div className="proj-header">
          <span>Projects</span>
          <span>Description & Link </span>
          <span>Technologies Used</span>
        </div>
        {projects && (
          <div className="proj-details">
            {projects.map(proj => (
              <div key={proj.name} className="proj-detail">
                <div>{proj.name}</div>
                <div className="proj-detail-desc">
                  <span>{proj.details.desc}</span>
                  <span>
                    <a href={`${proj.details.link}`}>App here</a>
                  </span>
                  <span>
                    <a href={`${proj.details.codeLink}`}>code here</a>
                  </span>
                </div>
                <span>{proj.tech}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="profile">
        <div className="profile-header">
          <h3>Personal Profile</h3>
        </div>
        {personalProfile && (
          <div className="profile-header-details">
            <p>{personalProfile.about}</p>
            <p>{personalProfile.experience}</p>
            <p>{personalProfile.carrerGoal}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default resumeHeader;
