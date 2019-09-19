import React from 'react';
import { connect } from 'react-redux';
import { editStatus } from '../../actions/user';

class Status extends React.Component {
  state = {
    selectedOption: this.props.status ? this.props.status : '',
    info: this.props.info ? this.props.info : '',
    msg: null
  };
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'Status Fail') {
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
        this.props.history.push('/admin/admin');
      }
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  formSubmit = e => {
    e.preventDefault();
    const { selectedOption, info } = this.state;
    let status = null;
    if (selectedOption === 'Not Available') {
      status = false;
    } else {
      status = true;
    }
    const changeStatus = { status, info };
    this.props.editStatus(changeStatus);
  };
  render() {
    return (
      <div className="user-info">
        Job status : {this.props.status};
        <div className="form_wrapper" style={{ margin: '10px' }}>
          <div className="form_container">
            {this.state.msg && <p>{this.state.msg}</p>}
            <div className="title_container">
              <div className="row clearfix">
                <div className="">
                  <form onSubmit={this.formSubmit}>
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        autoFocus={true}
                        type="text"
                        placeholder="info"
                        value={this.state.info}
                        onChange={this.onChange}
                        name="info"
                        required
                      />
                    </div>
                    <div className="input_field radio_option">
                      <input
                        type="radio"
                        name="selectedOption"
                        checked={this.state.selectedOption === 'Available'}
                        value={'Available'}
                        id="rd1"
                        onChange={this.onChange}
                      />
                      <label htmlFor="rd1">Available</label>
                      <input
                        type="radio"
                        name="selectedOption"
                        checked={this.state.selectedOption === 'Not Available'}
                        value={'Not Available'}
                        id="rd2"
                        onChange={this.onChange}
                      />
                      <label htmlFor="rd2">Not Available</label>
                    </div>
                    <input
                      className="button"
                      type="submit"
                      value={this.props.formName}
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
  info: state.auth.user.info,
  status: state.auth.user.status === false ? 'Not Available' : 'Available',
  error: state.authError
});
export default connect(
  mapStateToProps,
  { editStatus }
)(Status);
