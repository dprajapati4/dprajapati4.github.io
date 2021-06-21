import React from 'react';
import { HashRouter, Route, Switch,Link } from 'react-router-dom';
import {
  Grommet,
  Box,
  SkipLinkTarget,
  SkipLink,
  SkipLinks,
  Avatar,
  Anchor,
  Nav,
  Header,

} from 'grommet';

// import Navbar from './components/Navbar';
import Connect from './components/Connect';
import Projects from './components/Projects';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const theme = {
  global: {
    font: {
      family: 'Arvo',
      size: '15px',
      height: '20px',
    },
    carousel: {
      animation: {
        duration: 400,
      },
      icons: {
        color: 'white',
      },
      disabled: {
        icons: {
          color: 'grey',
        },
      },
    },
  },
};

const titles = [
  { label: 'About', title:'About Me' },
  { label: 'Projects', title: 'Projects' },
  { label: 'Resume', title: 'Resume'},
  // { label: 'Contact' }
];

function App() {
  return (
    <HashRouter>
      <Grommet theme={theme}>
        <SkipLinks>
          <SkipLink id="main" label="Main Content" />
          <SkipLink id="footer" label="Footer" />
        </SkipLinks>
        <Box fill>
          <Header pad="small" elevation="large">
            <Box direction="row" align="center" gap="small">
              <Avatar src={`${process.env.PUBLIC_URL}/assets/DeepPhoto.png`} />
              <Anchor color="brand" href="./components/AboutMe.js ">
                Deep Prajapati
              </Anchor>
            </Box>
            <Nav direction="row" gap="large">
              {titles.map((title) => (
                <Link to={`/${title.label}`}> {title.title}</Link>
              ))}
            </Nav>
          </Header>



          <Box
            // border margin="auto" width="65%" padding="10px"
            width="large"
            pad="xsmall"
            alignSelf="center"
            border
            flex
            elevation="large"
            margin="50px"
          >
            <Switch>
              <Route exact path="/" component={AboutMe} />
              <Route exact path="/About" component={AboutMe} />
              <Route exact path="/Projects" component={Projects} />
              <Route exact path="/Resume" component={Resume} />
              <Route exact path="/Contact" component={Contact} />
            </Switch>
          </Box>
          <Box>
          <SkipLinkTarget id="connect" />
          <Connect />
          </Box>
        </Box>
      </Grommet>
    </HashRouter>
  );
}

export default App;
