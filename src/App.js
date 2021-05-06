import React from 'react';
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';
import {Grommet} from 'grommet';

// import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

      {/* <div className="App"> */}
        <Navbar />

        <div className="middle">
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
        </div>

        <Footer />
      {/* </div> */}
      </Grommet>
    </HashRouter>
  );
}

export default App;
