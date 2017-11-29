import React from 'react';
import Button from '../Button/Button'

import {
  Link
} from 'react-router';

import './Menu.css';

export default ({ funcChange }) => {
  return (
    <div className="menu-row">
      <nav className="horizontal-nav left">
        <ul>
          <li><Button text="Home" onClick={()=> funcChange('menu')} style="nav-item"/></li>
        </ul>
      </nav>
      <nav className="horizontal-nav right">
        <ul>
          <li><Button text="About us" onClick={()=> funcChange('about')} style="nav-item"/></li>
          <li><Button text="Manual" onClick={()=> funcChange('manual')} style="nav-item"/></li>
          <li><Button text="Contact us" onClick={()=> funcChange('form')} style="nav-item"/></li>
          <li>
            <Link to='/login' className='nav-item'  style={{ float: 'right' }}>
              <Button className='nav-item' text="Log in"/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    );
}
