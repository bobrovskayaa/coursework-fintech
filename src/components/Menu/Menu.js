import React from 'react';
import Button from '../Button/Button'
import {Link} from 'react-router';

import './Menu.css';

export default ({ funcChange }) => {
  return (
    <div className="menu-row">
      <nav className="horizontal-nav left">
        <ul>
          <li><Button text="Главная" onClick={()=> funcChange('menu')} btnStyle="nav-item"/></li>
        </ul>
      </nav>
      <nav className="horizontal-nav right">
        <ul>
          <li className='extra-li'><Button text="О нас" onClick={()=> funcChange('about')} btnStyle="nav-item"/></li>
          <li className='extra-li'><Button text="Инструкция" onClick={()=> funcChange('manual')} btnStyle="nav-item"/></li>
          <li className='extra-li'><Button text="Обратная связь" onClick={()=> funcChange('form')} btnStyle="nav-item"/></li>
          <li>
            <Link to='/coursework-fintech/build/login' style={{ float: 'right' }}>
              <Button btnStyle='nav-item' text="Обновить токен"/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    );
}
