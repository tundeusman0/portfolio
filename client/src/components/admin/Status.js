import React from 'react';

class Status extends React.Component {
  state = {
    true: true,
    false: false,
    status: '',
    info: ''
  };
  render() {
    return (
      <div className="user-info">
        Job status : Available;
        <div className="form_wrapper" style={{ margin: '10px' }}>
          <div className="form_container">
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
                        name="status"
                        checked={this.state.true === true}
                        value={true}
                        id="rd1"
                        onChange={this.onChange}
                      />
                      <label htmlFor="rd1">Available</label>
                      <input
                        type="radio"
                        name="status"
                        checked={this.state.false === false}
                        value={false}
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

export default Status;
