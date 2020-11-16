import React, { useState } from 'react';

// components

function HeaderPhone() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <header className="header-mobile-space-holder">
      <div className="div-header-nav">
        <div className="div-hamburger" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
          <span className="span-hamburger-top" style={isHamburgerOpen ? {transition: "0.4s", top:"1rem", transform:"rotate(-45deg)"} : {}} />
          <span className="span-hamburger-middle" style={isHamburgerOpen ? {visibility:"hidden"} : {visibility:"visible"}} />
          <span className="span-hamburger-bottom" style={isHamburgerOpen ? {transition: "0.4s", top:"-1rem", transform:"rotate(45deg)"} : {}} />
        </div>
      </div>
    </header>
  );
}

export default HeaderPhone;