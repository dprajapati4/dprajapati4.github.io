import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
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
  Footer,
} from 'grommet';

// import Navbar from './components/Navbar';
import Connect from './components/Connect';
import Projects from './components/Projects';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import About from './components/About';
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
  { label: 'About', title: 'About Me' },
  { label: 'Projects', title: 'Projects' },
  { label: 'Resume', title: 'Resume' },
  // { label: 'Contact' }
];

function App() {
  return (
    <HashRouter>
      <Grommet theme={theme}>
        <Box fill alignContent="center" height={{ min: '100vh' }}>
          <Box
            height={{ min: '100vh' }}
            responsive
            pad="small"
            align="center"
            elevation="large"
            // border
          >
            <Header pad="small" width="xxlarge">
              <Box direction="row" align="center" gap="small">
                <Avatar
                  src={`${process.env.PUBLIC_URL}/assets/DeepPhoto.png`}
                />
                <Anchor color="brand" href="./">
                  Deep Prajapati
                </Anchor>
              </Box>
              <Nav direction="row" gap="large">
                {titles.map((title) => (
                  <Link to={`/${title.label}`}> {title.title}</Link>
                ))}
              </Nav>
            </Header>
            <Box fill="vertical">
              <About />
              <AboutMe />
              <Projects />
              <Resume />

              {/*
            <Switch>
              <Route exact path="/" component={AboutMe} />
              <Route exact path="/About" component={AboutMe} />
              <Route exact path="/Projects" component={Projects} />
              <Route exact path="/Resume" component={Resume} />
              <Route exact path="/Contact" component={Contact} />
            </Switch> */}
            </Box>
            <Footer elevation="medium" align="end" round>
              <Connect />
            </Footer>
          </Box>
        </Box>
        {/* </div> */}
      </Grommet>
    </HashRouter>
  );
}

export default App;
