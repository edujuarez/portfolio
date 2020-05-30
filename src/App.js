import React from 'react';
import './App.css';
import { Home, Menu } from './components'
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <>
      <CssBaseline>
        <Menu/>
        <Home/>
      </CssBaseline>
      
    </>
  );
}

export default App;