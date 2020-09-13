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
      {/* <a href="#" className="a-nav-desktop-item">Intro</a> */}
      <a href="#" className="a-nav-desktop-item">About</a>
      <a href="#" className="a-nav-desktop-item">Projects</a>
      <a href="#" className="a-nav-desktop-item">Skills</a>
      <a href="#" className="a-nav-desktop-item">Resumes</a>
      <a href="#" className="a-nav-desktop-item">Contact</a>
    </nav>
  );
}

export default NavDesktop;