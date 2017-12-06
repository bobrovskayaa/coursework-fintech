import React from 'react';
import Button from '../Button/Button'
import {Link} from 'react-router';

import './Menu.css';

export default ({ funcChange }) => {
  return (
    <div className="menu-row">
      <nav className="horizontal-nav left">
        <ul>
          <li><Button text="Home" onClick={()=> funcChange('menu')} btnStyle="nav-item"/></li>
        </ul>
      </nav>
      <nav className="horizontal-nav right">
        <ul>
          <li><Button text="About us" onClick={()=> funcChange('about')} btnStyle="nav-item"/></li>
          <li><Button text="Manual" onClick={()=> funcChange('manual')} btnStyle="nav-item"/></li>
          <li><Button text="Contact us" onClick={()=> funcChange('form')} btnStyle="nav-item"/></li>
          <li>
            <Link to='/coursework-fintech/build/login' className='nav-item'  style={{ float: 'right' }}>
              <Button text="Log in"/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    );
}
