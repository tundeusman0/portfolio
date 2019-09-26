import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from './../../actions/auth';

class Admin extends React.Component {
  state = {
    msg: this.props.error.id ? this.props.error.msg : null
  };
  componentDidMount() {
    this.Interval = setInterval(() => this.setState({ msg: '' }), 4000);
  }
  componentWillUnmount() {
    clearInterval(this.Interval);
  }
  render() {
    return (
      <div className="admin">
        {this.state.msg && (
          <p style={{ fontSize: '20px', color: 'white' }}>{this.state.msg}</p>
        )}
        <button onClick={() => this.props.logOut()}>Log Out</button>
        <div className="User">
          <Link to="/admin/user">User</Link>
        </div>
        <div className="User">
          <Link to="/admin/resume">Resume</Link>
        </div>
        <div className="User">
          <Link to="/admin/logo">logo</Link>
        </div>
        <div className="User">
          <Link to="/admin/blog">Blog</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.authError
});
export default connect(
  mapStateToProps,
  { logOut }
)(Admin);
