import React from 'react';

const resumeDetails = ({ contact, tech, social, reference }) => {
  return (
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
            tech.map((techq,ind) => (
              <div key={ind} className="tech-detail">
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
              <div key={socials.name} className="tech-detail">
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
              <div key={ref.name} className="ref-detail">
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
  );
};

export default resumeDetails;
