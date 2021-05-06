import React from 'react';
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';
import { Grommet, Box } from 'grommet';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Connect from './components/Connect';
import Projects from './components/Projects';
import Resume from './components/Resume';

const theme = {
  global: {
    font: {
      family: 'Arvo',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <HashRouter>
      <Grommet theme={theme}>
        <Navbar />

        <Box
          justify="center"
          align="center"
          pad="xlarge"
          overflow="auto"
          background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"

        >
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
        </Box>

        <Connect />
      </Grommet>
    </HashRouter>
  );
}

export default App;
