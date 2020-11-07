import React from 'react';

// components
import Header from './Components/HeaderComponents/Header.js';
import Intro from './Pages/Intro.js';
import About from './Pages/About.js';

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <About />
    </div>
  );
}

export default App;
