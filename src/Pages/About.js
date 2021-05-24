import React from 'react';

// Components
import AboutCarousel from '../Components/AboutComponents/AboutCarousel.js';

function About() {
  return(
    <div id="about" className="div-about">
      <div className="div-about-content-container">
        <AboutCarousel />
      </div>
    </div>
  );
}

export default About;