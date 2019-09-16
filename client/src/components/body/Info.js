import React from 'react';
import { Spring } from 'react-spring/renderprops';

const Info = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 3000, duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <div className="home-info">
            <p>Hi, i'm</p>
            <h1>Tunde Usman</h1>
            <h3>A FULLSTACK / MERN developer web/mobile developer</h3>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default Info;
