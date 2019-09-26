import React from 'react';
import axios from 'axios';

class Resume extends React.Component {
  state = {
    resume: ''
  };
  componentDidMount() {
    axios
      .get('/api/resume')
      .then(res => this.setState({ resume: res.data }))
      .catch(e => console.warn(e));
  }
  render() {
    const { details, contact, education, proffesionalBody } = this.state.resume;
    const { reference } = this.state.resume;
    const { projects, personalProfile, tech, social } = this.state.resume;
    return (
      <div className="resume">
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

        <div className="resume-details">
          {contact && (
            <div className="contact">
              <div className="contact-header">
                <h3>Contact</h3>
              </div>
              <div className="contact-details">
                <div className="contact-detail">
                  Phone
                  <span>{contact.phone}</span>
                </div>
                <div className="contact-detail">
                  Email
                  <span>{contact.email}</span>
                </div>
                <div className="contact-detail">
                  Location
                  <span>{contact.location}</span>
                </div>
              </div>
            </div>
          )}

          <div className="tech">
            <div className="tech-header">
              <h3>Tech</h3>
            </div>
            <div className="tech-details">
              {tech &&
                tech.map(techq => (
                  <div className="tech-detail">
                    <div>
                      <i className={techq.logo}></i>
                      {techq.name}
                    </div>
                    <span>{techq.ability}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="tech">
            <div className="tech-header">
              <h3>Social</h3>
            </div>
            <div className="tech-details">
              {social &&
                social.map(socials => (
                  <div className="tech-detail">
                    <div>
                      <i className={socials.logo}></i>
                      {socials.name}
                    </div>
                    <span>
                      <a href={`${socials.link}`}>{socials.link}</a>
                    </span>
                  </div>
                ))}
            </div>
          </div>

          <div className="tech">
            <div className="tech-header">
              <h3>Reference</h3>
            </div>
            <div className="ref-details">
              {reference &&
                reference.map(ref => (
                  <div className="ref-detail">
                    <div>{ref.name}</div>
                    <div>
                      {ref.workPlace} {ref.post}
                    </div>
                    <div>{ref.email}</div>
                  </div>
                ))}
            </div>
          </div>
          <a href="/">Download Resume</a>
        </div>
      </div>
    );
  }
}


export default Resume;
