import React from 'react';

// data
import { bubblesData } from '../data/index.js';

function Skills() {
  return(
    <div id="skills" className="div-skills">
      <div className="div-skills-side-cover" />
      <div className="div-skills-content-container">
        {bubblesData.map(bubble => 
          <div key={bubble.id} className={bubble.className}>
            <img src={bubble.src} alt={bubble.alt} />
          </div>
        )}
      </div>
      <div className="div-skills-side-cover" />
    </div>
  );
}

export default Skills;