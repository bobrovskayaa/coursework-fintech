import React, { Component } from 'react';
import Home from './pages/Home'
import About from './pages/About'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
