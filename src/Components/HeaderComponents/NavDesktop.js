import React from 'react';
import { Link } from 'react-scroll';

function NavDesktop() {
  return (
    <nav className="nav-desktop">
      <Link
        activeClass="active"
        to={`intro`}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="a-nav-desktop-item"
      >
        Intro
      </Link>
      <Link
        activeClass="active"
        to={`about`}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="a-nav-desktop-item"
      >
        About
      </Link>
      <a href="#" className="a-nav-desktop-item">Projects</a>
      <a href="#" className="a-nav-desktop-item">Skills</a>
      <a href="#" className="a-nav-desktop-item">Resumes</a>
      <a href="#" className="a-nav-desktop-item">Contact</a>
    </nav>
  );
}

export default NavDesktop;