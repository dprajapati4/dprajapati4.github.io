import React from 'react';
import './App.css';
import pdf from './data/resume.pdf';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Deep Prajapati </h1>
        <div className="about-me">
          <h3> Hello!</h3>
          <h4>Who I am</h4>
          <p> I am a New York City based Software Engineer who is passionate about solving problems with simple solutions
            </p>
            <h4> Where I come from</h4>
            <p> Curious about the biology and psychology of the human mind
              I graduated with a BSc in Neuroscience.</p>
              <p> As a research assistant, I worked with 3D printed bioceramic scaffolds that aimed to augement calvaria bone growth. </p>
              <p>I analyzed psychometric scales and statistical data as a psychometrician to help diagnose psychological issues and learning disabilities. </p>
              <p>I graduated from The Grace Hopper Program at Fullstack Academy and develop the skills I needed to learn quickly
          and efficiently</p>
        </div>
        <span>Connect With Me</span>
        <a
          className="github-link"
          href="https://www.github.com/dprajapati4"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a
          className="linkedIn-link"
          href="https://www.linkedin.com/in/deepprajapati/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedIn
        </a>
        <a
          className="link black-80 hover-dark-gray pb2 pr2 f6"
          href={pdf}
          download="Prajapati_Deep_Resume.pdf"
        >
          resume
        </a>
      </header>
    </div>
  );
}

export default App;
