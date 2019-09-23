import React from 'react';
import { Spring } from 'react-spring/renderprops';
import axios from 'axios';

class Info extends React.Component {
  state = {
    user: ''
  };
  componentDidMount() {
    axios
      .get('/api/user/details')
      .then(user => this.setState({ user: user.data }))
      .catch(e => console.warn(e));
  }
  render() {
    const { userName, info } = this.state.user;
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div className="home-info">
              <p>Hi, i'm</p>
              <h1>{userName}</h1>
              <h3>A FULLSTACK / MERN developer web/mobile developer</h3>
              <h3>{info}</h3>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Info;
