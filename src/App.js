//App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Menu from './Menu';
import Blog from './Blog';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
    </div>
  );
}

export default App;
