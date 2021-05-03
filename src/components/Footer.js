import React from 'react';
import pdf from "../data/resume.pdf"

const Footer = () => {
  return(
    <footer className="connect">

            <>Connect With Me</>
            <br/>
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

          </footer>
  )
}

export default Footer