import React from 'react';
import Button from '../Button/Button'
import label from './label.png';

import {
    NavLink
  } from 'react-router-dom';

import './InfoItem.css';

const infoItemValue = 
    [{},
    {},
    {}];

export default ({ text }) => (
    <div className="info-item">
        <div className="info-subitem">
            <img src={label} alt='картинка' className='info-img'/>
        </div>
        <div className="info-subitem">
            <h3>Заголовок</h3>
        </div>
        <div className="info-subitem">
            {text}
        </div>
        <NavLink to='/about' className='info-link'>
          <Button text="Подробней" style="form-button" />
        </NavLink>
    </div>
);