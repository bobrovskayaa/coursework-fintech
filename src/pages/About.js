import React, { Component } from 'react';
import MenuSimple from '../components/Menu/MenuSimple'
import Menu from '../components/Menu/Menu'
import Banner from '../components/Banner/Banner'
import Info from '../components/Info/Info'
import Demo from '../components/Demo/Demo'
import Manual from '../components/Manual/Manual'
import Form from '../components/Form/Form'

class About extends Component {

  render() {
    return (
      <div>
        <MenuSimple />
        <div style={{padding: '30px'}}></div>
        <Manual />
      </div>
    );
  }
}

export default About;
