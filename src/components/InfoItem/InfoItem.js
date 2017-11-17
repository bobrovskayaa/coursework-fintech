import React from 'react';
import label from './label.png';

import './InfoItem.css';

export default ({ text }) => (
    <div className="info-item">
        <div className="info-subitem">
            <img src={label} alt='картинка' className='info-img'/>
        </div>
        <div className="info-subitem">
            Заголовок
        </div>
        <div className="info-subitem">
            {text}
        </div>
    </div>
);