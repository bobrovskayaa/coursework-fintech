import React, { Component } from 'react';
import MenuSimple from '../components/Menu/MenuSimple'
import WrapperAbout from '../components/Wrapper/WrapperAbout'

class About extends Component {

  render() {
    window.scroll(0,0);
    return (
      <div style={{background: '#222'}}>
        <MenuSimple />
        <div style={{ paddingTop: '30px' }}></div>

      </div>
    );
  }
}

export default About;
