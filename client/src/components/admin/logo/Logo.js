import React from 'react';
import LogoPix from '../UploadPix';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postLogoImage } from '../../../actions/logo/logo';
import LogoForm from './LogoForm';

class Logo extends React.Component {
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
        <h1>logo</h1>
        {this.state.msg && <h2>{this.state.msg}</h2>}
        <Link to="/admin/admin">Back to Admin User</Link>
        <LogoForm history={this.props.history} />
        <LogoPix
          pixSrc={'/api/logo/pix'}
          formName="Update Pix"
          postImage={this.props.postLogoImage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.authError
});

export default connect(
  mapStateToProps,
  { postLogoImage }
)(Logo);
