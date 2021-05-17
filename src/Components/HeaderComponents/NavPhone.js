import React, { useState } from 'react';

// components

function HeaderPhone() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <nav className="nav-phone">
      <div className="div-header-hamburger" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
        <span style={isHamburgerOpen ? {transition: "0.4s", top:"1rem", transform:"rotate(-45deg)"} : {}} />
        <span style={isHamburgerOpen ? {visibility:"hidden"} : {visibility:"visible"}} />
        <span style={isHamburgerOpen ? {transition: "0.4s", top:"-1rem", transform:"rotate(45deg)"} : {}} />
      </div>
    </nav>
  );
}

export default HeaderPhone;