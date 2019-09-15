import React from 'react';
import logo from '../../logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      {/* <img src="https" alt="logo" /> */}
      <img src={logo} alt="logo" />
      <p>This is the slogan</p>
    </div>
  );
};

export default Logo;
