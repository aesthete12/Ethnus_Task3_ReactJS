import React from 'react';
import './Portfolio.css'; // Import your stylesheet

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header>
        <h1 style={{ fontFamily: 'Cambria' }}>ANCHAL PARASHAR</h1>
        <p>Web Developer</p>
      </header>

      <section className="about-me">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I am a passionate web developer.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        {/* Include details about your projects here */}
        <div className="project">
          <h3>ETHNUS MERN Project 1</h3>
          <p>To create a ColorPicker with ReactJS</p>
        </div>

        <div className="project">
          <h3>ETHNUS MERN Project 2</h3>
          <p>To create a portfolio with ReactJS</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: linkedin.com/yourprofile</p>
        <p>GitHub: github.com/yourusername</p>
      </section>
    </div>
  );
};

export default Portfolio;
