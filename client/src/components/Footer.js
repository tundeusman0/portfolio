import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="videoStream">
        <video
          src="https://www.videvo.net/videvo_files/converted/2015_10/preview/Typing_dark_04_Videvo.mov46778.webm"
          autoPlay={true}
          loop={true}
        ></video>
      </div>
      <footer>
        <div className="footer-info">
          <div className="footer-media">
            <a href="www.facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://mobile.twitter.com/TmaniM?s=09">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="footer-connect">
            <h3>Get in touch with me</h3>
            <Link to="/contact">Contact Me</Link>
            <Link to="/chat">Chat with me</Link>
          </div>
        </div>
        <div className="footer-note">Developed by Idowu Usman Babatunde</div>
      </footer>
    </div>
  );
};

export default Footer;
