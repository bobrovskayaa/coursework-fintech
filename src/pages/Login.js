import React, { Component } from 'react';
import MenuSimple from '../components/Menu/MenuSimple'
import Enter from '../components/Enter/Enter'

class Login extends Component {

  render() {
    return (
      <div className='page-grey'>
        <MenuSimple />
        <Enter/>
      </div>
    );
  }
}

export default Login;
