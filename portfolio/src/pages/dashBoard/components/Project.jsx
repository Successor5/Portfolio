import React from 'react';
import '../styles/project.css';

function Project() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">Emmanuel Deborah</div>
        <div className="navbar-links">
          <a href="https://github.com/debby71711" target="_blank" rel="noopener noreferrer" className="navbar-link">GitHub</a>
          <a href="https://linkedin.com/in/deborah-emmanuel-9b500026b" target="_blank" rel="noopener noreferrer" className="navbar-link">LinkedIn</a>
        </div>
      </nav>
      <div className="portfolio-body">
        <h1 className="portfolio-title">Welcome to my portfolio!</h1>
        <p>Check out my GitHub repository for more projects:</p>
        <a href=" https://github.com/debby71711/MYLandidingPage" target="_blank" rel="noopener noreferrer" className="github-link">GitHub Repository</a>
      </div>
    </div>
  );
}

export default Project;
