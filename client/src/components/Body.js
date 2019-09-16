import React from 'react';
import ProfilePix from './body/ProfilePix';
import Info from './body/Info';
import Skills from './body/Skills';
import Status from './body/Status';

const Body = () => {
  return (
    <div className="body">
      <ProfilePix />
      <Info />
      <Status />
      <Skills />
    </div>
  );
};

export default Body;
