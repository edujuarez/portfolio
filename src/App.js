import React from 'react';
import './App.css';
import { Home, Menu, Portfolio, Skills, Contact } from './components'
import { CssBaseline } from '@material-ui/core'


function App() {
  return (
    <>
      <CssBaseline />
        <Menu/>
        <Home/>
        <Portfolio />
        <Skills />
        <Contact />
    </>
  );
}

export default App;
