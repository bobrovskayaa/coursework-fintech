import React, { Component } from 'react';
import Menu from './components/Menu/Menu'
import Banner from './components/Banner/Banner'
import Info from './components/Info/Info'
import Form from './components/Form/Form'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleMenu = (tag) => {
    const element = document.getElementById(tag);
    
    element.scrollIntoView(true);
    window.scrollBy(0,-80);
  };

  render() {
    return (
      <div className="App">
        <div id="menu">
          <Menu funcChange={this.handleMenu} />
        </div>
        <Banner funcChange={this.handleMenu}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div id="about">
          <Info header="About us" 
            descr="For companies which develop software to find bugs in the earliest stages of development." 
            tag="infolist"/>
        </div>
        <div id="prices">
          <Info header="Prices" descr="" tag="infolist"/>
        </div>
        <div id="demo">
          <Info header="Demo" descr="There will be demo" tag="demo"/>
        </div>
        <div id="manual">
          <Info header="Manual" descr="This manual for users whom already have DP program" 
            tag="manual"/>
        </div>
        <div id="form">
          <Info header="Contact us" descr="Please, feel free to contact us." tag="form"/>
        </div>
      </div>
    );
  }
}

export default App;
