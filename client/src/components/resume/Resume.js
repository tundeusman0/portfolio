import React from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ResumeHeader from './ResumeHeader';
import ResumeDetails from './ResumeDetails';

class Resume extends React.Component {
  state = {
    resume: '',
    width: window.innerWidth,
    height: window.innerHeight
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    axios
      .get('/api/resume')
      .then(res => this.setState({ resume: res.data }))
      .catch(e => console.warn(e));
  }
  printDocument = () => {
    const input = document.getElementById('divToPrint');
    const button = document.getElementById('printButton');
    button.style.display = 'none';
    setTimeout(() => {
      button.style.display = 'flex';
    }, 2000);
    const divHeight = input.clientHeight;
    const divWidth = input.clientWidth;

    html2canvas(input, {
      width: divWidth,
      height: divHeight
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const widhtt = this.state.width;
      const inputHeightMm = this.state.height;
      const isMobile = widhtt <= 500;

      let pdf = null;
      isMobile
        ? (pdf = new jsPDF('p', 'mm', [inputHeightMm * 2, widhtt]))
        : (pdf = new jsPDF());
      let width = pdf.internal.pageSize.getWidth();
      let height = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('tundeusman.pdf'); //Download the rendered PDF.
    });
  };
  render() {
    return (
      <div>
        {this.state.resume && (
          <div id="divToPrint" className="resume">
            <ResumeHeader
              details={this.state.resume.details}
              education={this.state.resume.education}
              proffesionalBody={this.state.resume.proffesionalBody}
              projects={this.state.resume.projects}
              personalProfile={this.state.resume.personalProfile}
            />
            <ResumeDetails
              contact={this.state.resume.contact}
              tech={this.state.resume.tech}
              social={this.state.resume.social}
              reference={this.state.resume.reference}
              download={this.printDocument}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Resume;
