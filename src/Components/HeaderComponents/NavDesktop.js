import React from 'react';
import { Link } from 'react-scroll';

function NavDesktop() {
  return (
    <nav className="nav-desktop">
      <Link
        to="intro"
        spy={true}
        smooth={true}
        duration={500}
        className="header-nav-link"
        activeClass="header-nav-link--active"
      >
        Intro
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        className="header-nav-link"
        activeClass="header-nav-link--active"
      >
        About
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        className="header-nav-link"
        activeClass="header-nav-link--active"
      >
        Projects
      </Link>
      <Link
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
        className="header-nav-link"
        activeClass="header-nav-link--active"
      >
        Skills
      </Link>
      <a href="/#" className="header-nav-link">Resumes</a>
      <a href="/#" className="header-nav-link">Contact</a>
    </nav>
  );
}

export default NavDesktop;