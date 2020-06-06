import React from 'react';
import './App.css';
import { Home, Menu, Portfolio, Skills } from './components'
import { CssBaseline } from '@material-ui/core'


function App() {
  return (
    <>
      <CssBaseline />
        <Menu/>
        <Home/>
        <Portfolio />
        <Skills />
    </>
  );
}

export default App;
