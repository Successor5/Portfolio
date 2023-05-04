import React, { useEffect, useState } from 'react';
import '../styles/portfolio.css';

function Portfolio() {
  const [name, setName] = useState('');

  useEffect(() => {
    const fullName = ' Emmanuel Deborah';
    let i = 0;
    const intervalId = setInterval(() => {
      setName((prevName) => prevName + fullName[i]);
      i++;
      if (i === fullName.length) {
        i = 0;
        setName('');
      }
    }, 200);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">{name}</div>
        <div className="navbar-links">
          <a href="https://github.com/debby71711" target="_blank" rel="noopener noreferrer" className="navbar-link">GitHub</a>
          <a href="https://linkedin.com/in/deborah-emmanuel-9b500026b" target="_blank" rel="noopener noreferrer" className="navbar-link">LinkedIn</a>
        </div>
      </nav>
      <div className="portfolio-body">
        <h1 className="portfolio-title">Welcome to my portfolio!</h1>
        <div className="portfolio-buttons">
          <a href="#" className="portfolio-button" onClick={() => { window.location.href = "/project" }}>Projects</a>
          <a href="#" className="portfolio-button" onClick={() => { window.location.href = "/skills" }}>Skills</a>
          <a href="#" className="portfolio-button" onClick={() => { window.location.href = "/about" }}>About</a>
          <a href="#" className="portfolio-button"  onClick={() => { window.location.href = "/Contact" }}>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
