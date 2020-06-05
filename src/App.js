import React from 'react';
import './App.css';
import { Home, Menu, Portfolio } from './components'
import { CssBaseline } from '@material-ui/core'

function App() {
  return (
    <>
      <CssBaseline>
        <Menu/>
        <Home/>
        <Portfolio />
      </CssBaseline>
      
    </>
  );
}

export default App;
