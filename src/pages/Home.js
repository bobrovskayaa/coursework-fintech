import React, { Component } from 'react';
import Menu from '../components/Menu/Menu'
import Banner from '../components/Banner/Banner'
import Info from '../components/Info/Info'
import Demo from '../components/Demo/Demo'
import Manual from '../components/Manual/Manual'
import Form from '../components/Form/Form'

import '../App.css';

class Home extends Component {

  handleMenu = (tag) => {
    const element = document.getElementById(tag);
    
    element.scrollIntoView(true);
    window.scrollBy(0,-80);
  };

  render() {
    return (
      <div>
        <div id='menu'>
          <Menu funcChange={this.handleMenu} />
        </div>
        <Banner funcChange={this.handleMenu}/>
        <Info />
        <Demo />
        <Manual />
        <Form />
      </div>
    );
  }
}

export default Home;
