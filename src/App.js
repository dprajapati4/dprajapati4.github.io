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
  { label: 'me' },
  { label: 'projects' },
  { label: 'resume' }
];


function App() {
  return (
    <HashRouter>
      <Grommet theme={theme}>
        <SkipLinks>
          <SkipLink id="main" label="Main Content" />
          <SkipLink id="footer" label="Footer" />
        </SkipLinks>
        <Box fill background="url(background)">
          {/* <Header pad="small" elevation="large">
            <Box direction="row" align="center" gap="small">
              <Avatar src={`${process.env.PUBLIC_URL}/assets/DeepPhoto.png`} />
              <Anchor color="brand" href="https://github.com/dprajapati4 ">
                Deep Prajapati
              </Anchor>
            </Box>
            <Nav direction="row">
              {titles.map((title) => (
                <Link to={`/${title.label}`}> {title.label}</Link>
              ))}
            </Nav>
          </Header> */}



          <Box
            // border margin="auto" width="65%" padding="10px"
            width="large"
            pad="20px"
            alignSelf="center"
            border={{ color: 'grey', size: '6px', radius:'10%' }}
            flex
            elevation="large"
            margin="20px"
            background='white'
            round
          >
            <Switch>
              <Route exact path="/" component={AboutMe} />
              <Route exact path="/me" component={AboutMe} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/contact" component={Contact} />
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
