import React from 'react';

// Components
import AboutCarousel from '../Components/AboutComponents/AboutCarousel.js';

function About() {
  return(
    <div id="about" className="div-about">
      <AboutCarousel
        containerWidth={1340}
        slideWidth={1340}
      />
    </div>
  );
}

export default About;