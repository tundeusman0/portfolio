import React, { Component } from 'react';
import shuffle from 'lodash/shuffle';
import axios from 'axios';

export default class Skills extends Component {
  state = { skills: '' };
  shuffle = () => this.setState(state => ({ skills: shuffle(state.skills) }));
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidMount() {
    this.interval = setInterval(this.shuffle, 5000);
    axios
      .get('/api/user/details')
      .then(user => this.setState({ skills: user.data.skills }))
      .catch(e => console.warn(e));
  }
  render() {
    let { skills } = this.state;
    return (
      <div className="home-skills">
        <h1>My Stack</h1>
        <ul>
          <li>
            TECH <span className="skill-rating">RATING</span>
          </li>
          {skills &&
            skills.map((child, id) => (
              <li key={id}>
                {child.skill}
                <span className="skill-rating-con">{child.rating}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
