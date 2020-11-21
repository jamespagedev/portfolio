import React, { useState } from 'react';

// Components
import LeftSide from '../Components/AboutComponents/LeftSide.js';

// Globals
import { hobbyTabIds } from '../Globals/index.js';

function About() {
  const [hobbyTabIdSelected, setHobbyTabIdSelected] = useState(hobbyTabIds.movies);
  return(
    <div id="about" className="div-about" style={{display: "none"}}>
      <LeftSide hobbyTabIdSelected={hobbyTabIdSelected} setHobbyTabIdSelected={setHobbyTabIdSelected} hobbyTabIds={hobbyTabIds} />
      <div className="div-about-right">
        <h1>Education</h1>
      </div>
    </div>
  );
}

export default About;