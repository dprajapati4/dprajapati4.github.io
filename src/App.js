import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
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
        <Box responsive flex alignContent="stretch">
          <Navbar />
          <Box border margin="auto" width="65%" padding="10px" >
            <Switch>
              <Route exact path="/" component={AboutMe} />
              <Route exact path="/me" component={AboutMe} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/resume" component={Resume} />
            </Switch>
          </Box>
          <Connect />
        </Box>
      </Grommet>
    </HashRouter>
  );
}

export default App;
