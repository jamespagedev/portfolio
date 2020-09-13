import React from 'react';

// components
import NavDesktop from './NavDesktop.js';
import NavTablet from './NavTablet.js';
// import NavPhone from './NavPhone.js';

function Header() {
  return (
    <header className="header">
      <NavDesktop />
      <NavTablet />
      {/* <NavPhone /> */}
    </header>
  );
}

export default Header;