import React from 'react';
import { Link } from 'react-scroll';
// import SvgBottomArrowCover from '../img/bottom-arrow-cover.svg';
// import 'clip-path-polyfill.js';

function Intro() {
  return (
    <div id="intro">
      <div className="div-intro-background-window">
        <p>Greetings, my name is James Page and I'm a</p>
        <h1>Full Stack Web Developer</h1>
        <p>Building friendly and responsive web applications</p>
      </div>
      <Link
        activeClass="active"
        to={`about`}
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        className="a-intro-bottom-click"
      >
        <div className="div-bouncing-arrow" />
        <div className="div-left-triangle" />
        <div className="div-right-triangle" />
      </Link>
    </div>
  );
}

export default Intro;