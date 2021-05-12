import React from 'react';
import pdf from '../data/resume.pdf';
import { Link } from 'react-router-dom';
import { Avatar, Anchor, Nav, Text, Header } from 'grommet';

const Navbar = () => {
  return (
    <Header background="#49434d" pad="small">
      <Link to="/">
        <h5>about</h5>
      </Link>
      <Link to="/projects">projects</Link>
      <h5>connect</h5>
      <Link to="/resume">
        <Anchor href={pdf} download="Prajapati_Deep_Resume.pdf">
          resume
        </Anchor>
      </Link>
    </Header>
  );
};

export default Navbar;
