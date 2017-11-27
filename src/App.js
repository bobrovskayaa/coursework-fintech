import React, { Component } from 'react';
import Menu from './components/Menu/Menu'
import Banner from './components/Banner/Banner'
import Infolist from './components/InfoList/InfoList'
import Demo from './components/Demo/Demo'
import Manual from './components/Manual/Manual'
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
        <Infolist />
        <Demo />
        <Manual />
        <Form />
      </div>
    );
  }
}

export default App;
