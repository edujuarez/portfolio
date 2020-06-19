import React from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core'
import { Route } from 'react-router-dom'
import Home from "./components/home/home"
import Menu from "./components/menu/menu"
import Portfolio from "./components/portfolio/portfolio"
import Skills from "./components/skills/skills"
import Contact from "./components/contact/contact"


function App() {
  return (
    <>
      <CssBaseline />
        <Route exact path= "/home" component={Home}/>
        <Route path= "/menu" component={Menu}/>
        <Route path= "/portfolio" component={Portfolio} />
        <Route path= "/skills" component={Skills} />
        <Route path= "/contact" component={Contact} />

    </>
  );
}

export default App;
