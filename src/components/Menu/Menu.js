import React from 'react';

import './Menu.css';

export default ({ funcChange }) => {
  return (
    <div className="menu-row">
      <nav className="horizontal-nav left">
        <ul>
          <li>
            <div className="nav-item" onClick={()=> funcChange('menu')}>Defect Prediction</div>
            </li>
        </ul>
      </nav>
      <nav class="horizontal-nav right">
        <ul>
          <li><div className="nav-item" onClick={()=> funcChange('about')}>About us</div></li>
          <li><div className="nav-item" onClick={()=> funcChange('prices')}>Prices</div></li>
          <li><div className="nav-item" onClick={()=> funcChange('demo')}>Demo</div></li>
          <li><div className="nav-item" onClick={()=> funcChange('manual')}>Manual</div></li>
          <li><div className="nav-item" onClick={()=> funcChange('form')}>Contact us</div></li>
        </ul>
      </nav>
    </div>
    );
}
