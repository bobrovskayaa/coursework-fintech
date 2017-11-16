import React, { Component } from 'react';
import Menu from './components/Menu/Menu'
import Banner from './components/Banner/Banner'
import Info from './components/Info/Info'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Banner />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Info header="About us"/>
        <Info header="Prices"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
