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
      size: '15px',
      height: '20px',
    },
    carousel: {
      animation: {
        duration: 400,
      },
      icons: {
        color: 'blue',
      },
      disabled: {
        icons: {
          color: 'grey',
        },
      },
    },
  },
};

function App() {
  return (
    <HashRouter>
      <Grommet theme={theme}>
        <div className="container">
          <Box>
          <Navbar />

          <Box  height={{"min":"100vh"}} width="large" pad="xsmall" alignSelf="center" border flex elevation="large" margin="50px" >
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/me" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
          </Box>
          <Connect />
          </Box>
        </div>
      </Grommet>
    </HashRouter>
  );
}

export default App;
