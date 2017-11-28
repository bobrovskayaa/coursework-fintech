import React from 'react';
import Button from '../Button/Button'

import './InfoItem.css';

const infoItemValue = 
    [  { title: "Проблема", 
        text: "Согласно исследованию, проведенному в университете Кембриджа, в среднем разработчики тратят 50% рабочего времени на поиск и исправление ошибок, что стоит всей индустрии в целом 312 миллиардов долларов в год.",
        img: 'images/icon1.png'},
      { title: "Sybil", 
        text: "Sybil - cервис поиска ошибок в исходном коде при помощи машинного обучения. Сервис помогает командам разработчиков решать проблемы поиска ошибок, оценки качества кода и определения приоритетов тестирования.",
        img: 'images/icon2.png'},
      { title: "Для кого", 
        text: "Нашими клиентами являются компании, разрабатывающие ПО и отдельные команды разработчиков. Мы ориентируемся на клиентов, которые уже используют автоматизированные решения для обеспечения качества кода.",
        img: 'images/icon3.png'}];

export default ({ id, onClick }) => {
    return (
    <div className="info-item">
        <div className="info-subitem">
            <img src={infoItemValue[id].img} alt='картинка' className='info-img'/>
        </div>
        <div className="info-subitem">
            <h3>{infoItemValue[id].title}</h3>
        </div>
        <div className="info-subitem info-text">
            {infoItemValue[id].text}
        </div>
        <Button text="Подробней" onClick={onClick} style="form-button" />
    </div>
    )
}