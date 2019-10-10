import React from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

class NavBar extends React.Component {
  state = {
    width: window.innerWidth,
    class_toggle: '',
    toggle_style: ''
  };
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    const nav = document.getElementById('nav');
    nav.addEventListener('click', () => {
      console.log(nav.style.display);
      if (nav.style.display !== 'none') {
        nav.style.display = 'none';
        this.setState({ toggle_style: '' });
        this.setState({ class_toggle: 'none' });
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  handleToggleChange = () => {
    if (this.state.class_toggle === 'flex') {
      this.setState({ class_toggle: 'none' });
      this.setState({ toggle_style: '' });
    } else {
      this.setState({ class_toggle: 'flex' });
      this.setState({ toggle_style: 'change' });
    }
  };

  render() {
    const { width, toggle_style, class_toggle } = this.state;
    const isMobile = width <= 500;
    return (
      <div className="toggle">
        {isMobile && (
          <div
            className={toggle_style}
            id="toggler"
            onClick={this.handleToggleChange}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        )}
        <Spring
          from={{ opacity: 0, marginTop: -500 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ delay: 1000, duration: 1000 }}
        >
          {props => (
            <div style={props}>
              <div
                className="navigation"
                id="nav"
                style={{
                  display: isMobile ? class_toggle : 'flex'
                }}
              >
                <NavLink to="/">
                  <i className="fas fa-home"></i>
                  Home
                </NavLink>
                <NavLink to="/resume">
                  <i className="fas fa-thumbs-up"></i>
                  My Resume
                </NavLink>
                <NavLink to="/Contact">
                  <i className="fas fa-mail-bulk"></i>
                  Contact Me
                </NavLink>
                <NavLink to="/chat">
                  <i className="fas fa-comments"></i>
                  Hi Let's Chat
                </NavLink>
                <NavLink to="/blog">
                  <i className="fas fa-blog"></i>
                  blog
                </NavLink>
              </div>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default NavBar;
