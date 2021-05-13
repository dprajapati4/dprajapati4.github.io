import React from 'react';
import pdf from '../data/resume.pdf';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Anchor,
  Nav,
  Text,
  Header,
  Heading,
  SkipLinkTarget,
  SkipLink,
  SkipLinks,
} from 'grommet';

const titles = ['me', 'projects', 'resume', 'connect'];

const Navbar = () => {
  return (
    <Header background="#49434d" pad="medium">
      {titles.map((title) => {
        return <Link to={`/${title}`}> {title}</Link>;
      })}
    </Header>
  );
};

export default Navbar;
