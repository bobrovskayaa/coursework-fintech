import React from 'react';
import Button from '../Button/Button'

import './Menu.css';

export default ({ funcChange }) => {
  return (
    <div className="menu-row">
      <nav className="horizontal-nav left">
        <ul>
          <li><Button text="Sybil" onClick={()=> funcChange('menu')} style="nav-item"/></li>
        </ul>
      </nav>
      <nav className="horizontal-nav right">
        <ul>
          <li><Button text="About us" onClick={()=> funcChange('about')} style="nav-item"/></li>
          <li><Button text="Demo" onClick={()=> funcChange('demo')} style="nav-item"/></li>
          <li><Button text="Manual" onClick={()=> funcChange('manual')} style="nav-item"/></li>
          <li><Button text="Contact us" onClick={()=> funcChange('form')} style="nav-item"/></li>
          <li><Button text="Log in" style="nav-item"/></li>
        </ul>
      </nav>
    </div>
    );
}
