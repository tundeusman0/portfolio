import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSlogan } from '../../../actions/logo/logo';

class LogoForm extends Component {
  state = {
    slogan: this.props.logo ? this.props.logo.slogan : 'No Slogan',
    msg: null
  };
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'Logo Fail') {
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
        this.props.history.push('/admin/logo');
      }
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    const { slogan } = this.state;
    const logo = {
      slogan
    };
    e.preventDefault();
    this.props.addSlogan(logo);
  };
  render() {
    return (
      <div>
        <div className="form_wrapper" style={{ margin: '5px' }}>
          <div className="form_container">
            <div className="title_container">
              {this.state.msg && <p>{this.state.msg}</p>}
              <h2>Slogan</h2>
              <div className="row clearfix">
                <div className="">
                  <form onSubmit={this.onSubmit}>
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fas fa-pencil-alt"></i>
                      </span>
                      <input
                        type="text"
                        placeholder={'Slogan'}
                        value={this.state.slogan}
                        onChange={this.onChange}
                        name={'slogan'}
                        required
                      />
                    </div>
                    <input
                      className="button"
                      type="submit"
                      value={'Edit Logo'}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.authError,
  logo: state.logo.logo
});

export default connect(
  mapStateToProps,
  { addSlogan }
)(LogoForm);
