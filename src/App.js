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
  },
};

// const theme = {
//   global: {
//     font: {
//       family: 'Arvo',
//       size: '18px',
//       height: '20px',
//     },
//     breakpoints: {
//       xsmall: {
//         value: 375,
//       },
//       small: {
//         value: 568,
//         edgeSize: {
//           none: '0px',
//           small: '6px',
//           medium: '12px',
//           large: '24px',
//         },
//       },
//       medium: {
//         value: 768,
//         edgeSize: {
//           none: '0px',
//           small: '12px',
//           medium: '24px',
//           large: '48px',
//         },
//       },
//       large: {
//         value: 1024,
//         edgeSize: {
//           none: '0px',
//           small: '12px',
//           medium: '24px',
//           large: '48px',
//         },
//       },
//       xlarge: {
//         value: 1366,
//         edgeSize: {
//           none: '0px',
//           small: '12px',
//           medium: '24px',
//           large: '48px',
//         },
//       },
//     },
//   },
// };

function App() {
  return (
    <HashRouter>
      <Grommet theme={theme}>
        <Box>
          <Navbar />

          <Box height="xlarge" width="xlarge" pad="xsmall" alignSelf="center">
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
