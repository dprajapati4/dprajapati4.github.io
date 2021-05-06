import React from 'react';
import pdf from "../data/resume.pdf"
import {Link} from "react-router-dom"
import { Avatar, Anchor, Nav, Grommet, Header } from 'grommet';

const Navbar = () => {
  return(
    <Header background="light-4" pad="small">
          <Link to="/">
          <h5>about</h5></Link>
          <Link to="/projects">
          projects</Link>

          <h5>connect</h5>
          <Link to="/resume">
          <a
              className="link black-80 hover-dark-gray pb2 pr2 f6"
              href={pdf}
              download="Prajapati_Deep_Resume.pdf"
            >
              resume
            </a>
            </Link>

          </Header>
  )
}

export default Navbar