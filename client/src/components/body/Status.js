import React from 'react';
import axios from 'axios';

class Status extends React.Component {
  state = {
    status: ''
  };
  componentDidMount() {
    axios
      .get('/api/user/details')
      .then(user => this.setState({ status: user.data }))
      .catch(e => console.warn(e));
  }
  render() {
    let { status } = this.state.status;
    if (status === false) {
      status = 'NOT AVAILABLE';
    } else {
      status = 'AVAILABLE';
    }
    
    return (
      <div className="home-status">
        <h3>
          Job Status: <span className="status-field">{status}</span>
        </h3>
      </div>
    );
  }
}

export default Status;
