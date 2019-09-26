import React from 'react';
import axios from 'axios';
import ResumeHeader from './ResumeHeader';
import ResumeDetails from './ResumeDetails';

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
    const { details, education, projects } = this.state.resume;
    const { contact, tech, social, reference } = this.state.resume;
    return (
      <div className="resume">
        <ResumeHeader
          details={details}
          education={education}
          proffesionalBody={this.state.resume.proffesionalBody}
          projects={projects}
          personalProfile={this.state.resume.personalProfile}
        />
        <ResumeDetails
          contact={contact}
          tech={tech}
          social={social}
          reference={reference}
        />
      </div>
    );
  }
}

export default Resume;
