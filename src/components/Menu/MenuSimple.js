import React from 'react';
import Button from '../Button/Button'

import './Menu.css';

import {
  NavLink
} from 'react-router-dom';

export default ({ }) => {
  return (
    <div className="menu-row">
      <nav className="horizontal-nav left">
        <ul>
          <li>
            <NavLink to='/' className='Link' activeClassName='Link--active'>
              <Button text="Home" style="nav-item"/>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    );
}
