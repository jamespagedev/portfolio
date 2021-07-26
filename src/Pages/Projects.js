import React from 'react';

// components
import Card from '../Components/ProjectComponents/Card.js';

// data
import { cardData } from  '../data/index.js';

// globals
import { isBrowserIE } from '../Globals/index.js';

function Projects() {
  return(
    <div id="projects" className="div-projects">
      <div className={isBrowserIE() ? "div-projects-content-container-ie" : "div-projects-content-container"}>
        {cardData.map((card, i) =>
          <Card key={i} data={card} />
        )}
      </div>
    </div>
  );
}

export default Projects;