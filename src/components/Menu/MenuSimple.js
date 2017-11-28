import React from 'react';
import Button from '../Button/Button'

import './Menu.css';

import {
  NavLink
} from 'react-router-dom';

export default ({ foo }) => {
  return (
    <div className="menu-left">
      <nav className="horizontal-nav left">
        <ul>
          <li>
            <NavLink to='/' className='nav-item'  style={{ float: 'left' }}>
              <Button text="Home"/>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    );
}
