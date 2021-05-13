import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Grommet, Box } from 'grommet';

import Navbar from './components/Navbar';
import Connect from './components/Connect';
import Projects from './components/Projects';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';

const theme = {
  global: {
    font: {
      family: 'Arvo',
      size: '18px',
      height: '20px',
    },
    carousel: {
      animation: {
        duration: 400,
      },
      icons: {
        color:"blue",

      },
      disabled: {
        icons: {
          color:"grey"
        },
      },
    },
  }
};


function App() {
  return (
    <HashRouter>
      <Grommet theme={theme}>
        <Box>
          <Navbar />

          <Box height="large" width="large" pad="xsmall" alignSelf="center">
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
          </Box>
          <Connect />
        </Box>
      </Grommet>
    </HashRouter>
  );
}

export default App;
