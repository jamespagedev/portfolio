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
        offset={-80}
        duration={500}
        className="a-intro-bottom-click"
      >
        <div className="div-bouncing-arrow" />
        {/* <div className="div-intro-bottom" /> */}
        {/* <div className="div-intro-bottom">
          <svg width="0" height="0">
            <clipPath id="myclippath" clipPathUnits="objectBoundingBox">
              <polygon points="0.50 0.50, 1.00 0, 1.00 1.00, 0 1.00, 0 0"/>
            </clipPath>
          </svg>
        </div> */}
        {/* <div style={{position: "absolute", bottom: "0", width: "100%", height: "100%", backgroundColor: "#ffffff"}} data-polyclip="50%, 50%, 100%, 0, 100%, 100%, 0, 100%, 0,0" /> */}
        <div className="div-left-triangle" />
        <div className="div-right-triangle" />
      </Link>
    </div>
  );
}

export default Intro;