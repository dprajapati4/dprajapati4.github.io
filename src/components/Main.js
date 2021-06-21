import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">About Me</NavLink></li>
            <li><NavLink to="/stuff">Projects</NavLink></li>
            <li><NavLink to="/stuff">Resume</NavLink></li>
            {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
          </ul>
          <div className="content">
          <Route exact path="/" component={AboutMe}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Resume" component={Resume}/>
            {/* <Route path="/Contact" component={Contact}/> */}
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;