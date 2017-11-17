import React, { Component } from 'react';
import Menu from './components/Menu/Menu'
import Banner from './components/Banner/Banner'
import Info from './components/Info/Info'
import Contact from './components/Contact/Contact'

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
        <Info header="About us" 
        descr="For companies which develop software to find bugs in the earliest stages of development." 
        tag="infolist"/>
        <Info header="Prices" descr="" tag="infolist"/>
        <Info header="Demo" descr="There will be demo" tag="demo"/>
        <Info header="Manual" descr="This manual for users whom already have DP program" tag="manual"/>
        <Info header="Contact us" descr="Please, feel free to contact us." tag="contact"/>
      </div>
    );
  }
}

export default App;
