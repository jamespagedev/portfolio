import React from 'react';
import { Link } from 'react-scroll';


function ArrowBottomArea() {
  return (
    <Link
      to={`about`}
      spy={true}
      smooth={true}
      offset={-56}
      duration={500}
      className="a-intro-bottom-click"
    >
      <div className="div-intro-bouncing-arrow" />
      <div className="div-intro-left-triangle" />
      <div className="div-intro-right-triangle" />
    </Link>
  );
}

export default ArrowBottomArea;