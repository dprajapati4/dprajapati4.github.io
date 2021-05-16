import React from 'react';
import pdf from '../data/resume.pdf';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Anchor,
  Nav,
  Box,
  Header,
  Heading,
  SkipLinkTarget,
  SkipLink,
  SkipLinks,
} from 'grommet';

// const titles = ['me', 'projects', 'resume'];

const titles = [
  { label: 'me', href: '#' },
  { label: 'project', href: '#' },
  { label: 'resume', href: '#' },
  // { label: 'REACT', href: '#' },
]

const Navbar = () => {
  return (
    <Header
     pad="small"
     elevation="large"
     >
        <Box direction="row" align="center" gap="small">
        <Avatar src={`${process.env.PUBLIC_URL}/assets/photo.png}`} />
        <Anchor color="brand" href="https://github.com/dprajapati4 ">
          Deep Prajapati
        </Anchor>
      </Box>
       <Nav direction="row">
        {titles.map(item => (
          <Anchor href={item.href} label={item.label} key={item.label} />
        ))}
      </Nav>
      {/* {titles.map((title) => {
        return <Link to={`/${title}`}> {title}</Link>;
      })} */}
    </Header>
  );
};

export default Navbar;
