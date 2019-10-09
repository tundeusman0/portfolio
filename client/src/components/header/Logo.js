import React from 'react';
import axios from 'axios';

class Logo extends React.Component {
  state = {
    slogan: '',
    img: ''
  };
  componentDidMount() {
    axios
      .get('/api/logo')
      .then(res => this.setState({ slogan: res.data.slogan }));
    axios.get('/api/logo/pix').then(res => this.setState({ img: res.data }));
  }

  render() {
    const { slogan, img } = this.state;
    return (
      <div className="logo">
        {img && <img src={`/api/logo/pix`} alt="logo" />}
        {slogan ? <p>{slogan}</p> : <p>This is the slogan</p>}
      </div>
    );
  }
}

export default Logo;
