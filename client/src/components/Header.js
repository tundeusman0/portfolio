import React from 'react';
import Logo from './header/Logo';
import NavBar from './header/NavBar';

const Header = () => {
  return (
    <div className="header-component">
      <Logo />
      <div className="nav-bar">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
