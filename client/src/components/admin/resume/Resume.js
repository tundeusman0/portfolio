import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ResumePix from '../UploadPix';
import { postImage } from '../../../actions/resume/resume';
import ResumeEdu from './ResumeEdu';
import ResumeProf from './ResumeProf';
import ResumeRef from './ResumeRef';
import ResumeProjects from './ResumeProjects';
import ResumeTech from './ResumeTech';
import ResumeSocial from './ResumeSocial';

class Resume extends React.Component {
  state = {
    msg: ''
  };
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'MSG' || error.status === 400) {
        this.setState({ msg: error.msg });
      }
    }
  }
  componentDidMount() {
    this.Interval = setInterval(() => this.setState({ msg: '' }), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.Interval);
  }
  render() {
    return (
      <div
        className="User arrange"
        style={{ marginTop: '0', marginBottom: '0' }}
      >
        {this.state.msg && <h2>{this.state.msg}</h2>}
        <Link to="/admin/admin">Back to Admin User</Link>
        <Link to="/admin/add_resume">Add Resume</Link>
        <Link to="/admin/edit_resume">Edit Resume</Link>
        <ResumePix
          pixSrc={'/api/resume/pix'}
          formName="Update Pix"
          postImage={this.props.postImage}
        />
        <ResumeEdu history={this.props.history} />
        <ResumeProf history={this.props.history} />
        <ResumeRef history={this.props.history} />
        <ResumeProjects history={this.props.history} />
        <ResumeTech history={this.props.history} />
        <ResumeSocial history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.authError
});

export default connect(
  mapStateToProps,
  { postImage }
)(Resume);
