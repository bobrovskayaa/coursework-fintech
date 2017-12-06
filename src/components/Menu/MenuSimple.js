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
            <Link to='/coursework-fintech/build/' className='nav-item'  style={{ float: 'left' }}>
              <Button className='nav-item' text="Home"/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    );
}
