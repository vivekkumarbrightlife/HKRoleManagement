import React from 'react';
import Header from './Components/Header';
import './App.css';
import SideMenu from './Components/SideMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home} from './Components/Home';

function App() {
  return (
    <div className="App">
      <SideMenu />
    </div>
  );
}

export default App;
