import React from 'react';
import Button from '../Button/Button'

import {
    NavLink
  } from 'react-router-dom';

import './InfoItem.css';

const infoItemValue = 
    [  { title: "Проблема", 
        text: "Согласно исследованию, проведенному в университете Кембриджа, в среднем разработчики тратят 50% рабочего времени на поиск и исправление ошибок, что стоит всей индустрии в целом 312 миллиардов долларов в год.",
        img: './label.png'},
      { title: "Sybil", 
        text: "Sybil - cервис поиска ошибок в исходном коде при помощи машинного обучения. Сервис помогает командам разработчиков решать проблемы поиска ошибок, оценки качества кода и определения приоритетов тестирования.",
        img: ""},
      { title: "Для кого", 
        text: "Нашими клиентами являются компании, разрабатывающие ПО и отдельные команды разработчиков. Мы ориентируемся на те компании и команды, которые уже используют автоматизированные решения для обеспечения качества кода.",
        img: ""}];

export default ({ id }) => {
    return (
    <div className="info-item">
        <div className="info-subitem">
            <img src={infoItemValue[id].img} alt='картинка' className='info-img'/>
        </div>
        <div className="info-subitem">
            <h3>{infoItemValue[id].title}</h3>
        </div>
        <div>
        <div className="info-subitem info-text">
            {infoItemValue[id].text}
        </div>
        </div>
        <NavLink to='/about' className='info-link'>
          <Button text="Подробней" style="form-button" />
        </NavLink>
    </div>
    )
}