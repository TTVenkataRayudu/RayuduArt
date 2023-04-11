import React from 'react';
import logo from './logo.svg';
import { HomePage } from '../src/Components/HomePage';
import {NavSection} from '../src/Components/NavSection'


import './App.css';
 

function App() {
  return (
      <div className="App">
        <NavSection></NavSection>
        <HomePage></HomePage>
    </div>
  );
}

export default App;
