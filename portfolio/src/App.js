/*import React from 'react';
import './App.css';
import Portfolio from './pages/dashBoard/components/portfolio';
import Project from './pages/dashBoard/components/Project';
import Skills from './pages/dashBoard/components/skills';
import About from './pages/dashBoard/components/about';
import Me from './pages/dashBoard/components/me';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';*/
function App() {
  return (
    <div className="App">
      <Router>
       /* <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/project" element={<Project />} />
          <Route path="/Skills" element={<Skills/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Me/>} />
        </Routes>*/
      </Router>
    </div>
  );
}

export default App;
