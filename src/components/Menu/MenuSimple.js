import React from 'react';
import Button from '../Button/Button'

import './Menu.css';

import {
  NavLink
} from 'react-router-dom';

export default ({ }) => {
  return (
    <div className="menu-left">
      <nav className="horizontal-nav left">
        <ul>
          <li>
            <NavLink to='/'>
              <Button text="Home" style="nav-left-item"/>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    );
}
