import React from 'react';

// Components
import WindowLarge from '../Components/IntroComponents/WindowLarge';
import WindowSmall from '../Components/IntroComponents/WindowSmall';
import ArrowBottomArea from '../Components/IntroComponents/ArrowBottomArea';


function Intro() {
  return (
    <div id="intro">
      <WindowLarge />
      <WindowSmall />
      <ArrowBottomArea />
    </div>
  );
}

export default Intro;