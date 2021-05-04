import React from 'react';

// components
import Header from './Components/HeaderComponents/Header.js';
import HeaderPhone from './Components/HeaderComponents/HeaderPhone.js';
import Intro from './Pages/Intro.js';
import About from './Pages/About.js';
import Projects from './Pages/Projects.js';

function App() {
  return (
    <div className="app">
      <Header />
      <HeaderPhone />
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
