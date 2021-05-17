import React from 'react';

// components
import NavDesktop from './NavDesktop.js';
import NavTablet from './NavTablet.js';
import NavPhone from './NavPhone.js';

function Header() {
  return (
    <header>
      <div className="div-header-nav">
        <NavDesktop />
        <NavTablet />
        <NavPhone />
      </div>
    </header>
  );
}

export default Header;