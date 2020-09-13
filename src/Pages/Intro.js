import React from 'react';

function Intro() {
  return (
    <div id="intro">
      <div className="div-intro-background-window">
        <p>Greetings, my name is James Page and I'm a</p>
        <h1>Full Stack Web Developer</h1>
        <p>Building friendly and responsive web applications</p>
      </div>
      <a href="#" className="a-intro-bottom-click">
        <div className="div-bouncing-arrow" />
        <div className="div-intro-bottom" />
      </a>
    </div>
  );
}

export default Intro;