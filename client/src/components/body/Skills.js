import React, { Component } from 'react';
import data from './data';
import shuffle from 'lodash/shuffle';

export default class Skills extends Component {
  state = { data };
  shuffle = () => this.setState(state => ({ data: shuffle(state.data) }));
  componentDidMount() {
    setInterval(this.shuffle, 3000);
  }
  render() {
    return (
      <div className="home-skills">
        <h1>My Stack</h1>
        <ul>
          <li>
            TECH <span className="skill-rating">RATING</span>
          </li>
          {this.state.data.map((child, id) => (
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
