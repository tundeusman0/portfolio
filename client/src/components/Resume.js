import React from 'react';
import PP from '../pp.jpg';

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-info">
        {
          // <div className="resume-pix">
          //   <img src={PP} alt="pix" />
          // </div>
        }

        <div className="resume-header">
          <div className="resume-pix">
            <img src={PP} alt="pix" />
          </div>
          <div className="resume-header-info">
            <h1>Usman Idowu</h1>
            <h2>MERN Stack Developer</h2>
            <h3>dedicated to continual learning</h3>
          </div>
        </div>
        <div className="resume-header-edu-title">
          <h3>Education</h3>
        </div>
        <div className="resume-header-edu">
          <div className="resume-header-edu-item">
            <span className="resume-edu-date">2011-2015</span>
            <div className="resume-edu-name">
              Nigerian Navy secondary School
              <span>Second Class Honours, Upper Division</span>
            </div>
          </div>
          <div className="resume-header-edu-item">
            <span className="resume-edu-date">2011-2015</span>
            <div className="resume-edu-name">
              Nigerian Navy secondary School
              <span>Second Class Honours, Upper Division</span>
            </div>
          </div>
          <div className="resume-header-edu-item">
            <span className="resume-edu-date">2011-2015</span>
            <div className="resume-edu-name">
              Nigerian Navy secondary School
              <span>Second Class Honours, Upper Division</span>
            </div>
          </div>
        </div>

        <div className="resume-pro-certy">
          <p>
            PROFESSIONAL BODY MEMBERSHIP:
            <span className="resume-pro-certy-name">
              Member Computer Professional of Nigeria
            </span>
          </p>
        </div>

        <div className="projects">
          <div className="proj-header">
            <span>Projects</span>
            <span>Description & Link </span>
            <span>Technologies Used</span>
          </div>
          <div className="proj-details">
            <div className="proj-detail">
              <div>Reminisce Loan App</div>
              <div className="proj-detail-desc">
                <span>A LOAN APP</span>
                <span>
                  <a href="/">App here</a>
                </span>
                <span>
                  <a href="/">code here</a>
                </span>
              </div>
              <span>html,Css,node,ejs,me,my brain</span>
            </div>

            <div className="proj-detail">
              <div>Reminisce Loan App</div>
              <div className="proj-detail-desc">
                <span>A LOAN APP</span>
                <span>
                  <a href="/">App here</a>
                </span>
                <span>
                  <a href="/">code here</a>
                </span>
              </div>
              <span>html,Css,node,ejs,me,my brain</span>
            </div>

            <div className="proj-detail">
              <div>Reminisce Loan App</div>
              <div className="proj-detail-desc">
                <span>A LOAN APP</span>
                <span>
                  <a href="/">App here</a>
                </span>
                <span>
                  <a href="/">code here</a>
                </span>
              </div>
              <span>html,Css,node,ejs,me,my brain</span>
            </div>
          </div>
        </div>

        <div className="profile">
          <div className="profile-header">
            <h3>Personal Profile</h3>
          </div>
          <div className="profile-header-details">
            <p>
              I am an enthusiastic graduate with condence and determination to
              add the necessary value to any organization with a skill of
              adaptation and a challenge ghter
            </p>
            <p>
              A Full Stack developer with over 2 years of experience developing
              applications with a wide range of cutting edge technologies
            </p>
            <p>
              My Career goals: To be a software engineer with a lot of
              experience and ability to use my skills to add value to the
              community
            </p>
          </div>
        </div>
      </div>

      <div className="resume-details">
        <div className="contact">
          <div className="contact-header">
            <h3>Contact</h3>
          </div>
          <div className="contact-details">
            <div className="contact-detail">
              Phone
              <span>08086464667</span>
            </div>
            <div className="contact-detail">
              Email
              <span>tundeusman0@gmail.com</span>
            </div>
            <div className="contact-detail">
              Location
              <span>ilorin Kwara state</span>
            </div>
          </div>
        </div>

        <div className="tech">
          <div className="tech-header">
            <h3>Tech</h3>
          </div>
          <div className="tech-details">
            <div className="tech-detail">
              <div>
                <i className="fa fa-user"></i>
                HTML
              </div>

              <span>Strong</span>
            </div>
            <div className="tech-detail">
              <div>
                <i className="fa fa-user"></i>
                HTML
              </div>
              <span>Strong</span>
            </div>
            <div className="tech-detail">
              <div>
                <i className="fa fa-user"></i>
                HTML
              </div>
              <span>Strong</span>
            </div>
            <div className="tech-detail">
              <div>
                <i className="fa fa-user"></i>
                HTML
              </div>
              <span>Strong</span>
            </div>
            <div className="tech-detail">
              <div>
                <i className="fa fa-user"></i>
                HTML
              </div>
              <span>Strong</span>
            </div>
          </div>
        </div>

        <div className="tech">
          <div className="tech-header">
            <h3>Social</h3>
          </div>
          <div className="tech-details">
            <div className="tech-detail">
              <div>
                <i className="fa fa-user"></i>
                HTML
              </div>
              <span>
                <a href="www">tundeusman0</a>
              </span>
            </div>
            <div className="tech-detail">
              <div>
                <i className="fa fa-user"></i>
                HTML
              </div>
              <span>
                <a href="www">tundeusman0</a>
              </span>
            </div>
            <div className="tech-detail">
              <div>
                <i className="fa fa-user"></i>
                HTML
              </div>
              <span>
                <a href="www">tundeusman0</a>
              </span>
            </div>
          </div>
        </div>

        <div className="tech">
          <div className="tech-header">
            <h3>Reference</h3>
          </div>
          <div className="ref-details">
            <div className="ref-detail">
              <div>Dr. Hamzah Usman</div>
              <div>
                Lecturer, Computer science University of Ilorin, Kwara State
                08035856551
              </div>
              <div>P.M.B 1601 08034825810</div>
            </div>
            <div className="ref-detail">
              <div>Dr. Hamzah Usman</div>
              <div>
                Lecturer, Computer science University of Ilorin, Kwara State
                08035856551
              </div>
              <div>P.M.B 1601 08034825810</div>
            </div>

            <div className="ref-detail">
              <div>Dr. Hamzah Usman</div>
              <div>
                Lecturer, Computer science University of Ilorin, Kwara State
                08035856551
              </div>
              <div>P.M.B 1601 08034825810</div>
            </div>
          </div>

        </div>
        <a href="/">Download Resume</a>
      </div>

    </div>
  );
};

export default Resume;
