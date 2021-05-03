import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Projects from './components/Projects';
import Resume from "./components/Resume"

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
    <Switch>
      <Route exact path ="/" component={Home} />
      <Route exact path ="/projects" component={Projects} />
      <Route exact path ="/resume" component={Resume}/>
    </Switch>
    <Footer/>



      </div>
    </Router>
  );
}

export default App;
