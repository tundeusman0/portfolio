import React from 'react';
import axios from 'axios';

class Logo extends React.Component {
  state = {
    slogan: ''
  };
  componentDidMount() {
    axios
      .get('/api/logo')
      .then(res => this.setState({ slogan: res.data.slogan }));
  }

  render() {
    const { slogan } = this.state;
    return (
      <div className="logo">
        <img src={`/api/logo/pix`} alt="logo" />
        {slogan ? <p>{slogan}</p> : <p>This is the slogan</p>}
      </div>
    );
  }
}

export default Logo;
