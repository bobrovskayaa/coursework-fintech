import React from 'react';
import Button from '../Button/Button'

import './Menu.css';

import {
  Link
} from 'react-router';

export default ({ foo }) => {
  return (
    <div className="menu-left">
      <nav className="horizontal-nav left">
        <ul>
          <li>
            <Link to='/' className='nav-item'  style={{ float: 'left' }}>
              <Button text="Home"/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    );
}
