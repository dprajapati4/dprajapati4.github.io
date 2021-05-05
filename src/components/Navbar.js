import React from 'react';
import pdf from "../data/resume.pdf"

const Navbar = () => {
  return(
    <header className="App-header">
          <h5>about</h5>
          <a href="/projects" >
          projects</a>
          <h5>experience</h5>
          <h5>connect</h5>
          <a
              className="link black-80 hover-dark-gray pb2 pr2 f6"
              href={pdf}
              download="Prajapati_Deep_Resume.pdf"
            >
              resume
            </a>

          </header>
  )
}

export default Navbar