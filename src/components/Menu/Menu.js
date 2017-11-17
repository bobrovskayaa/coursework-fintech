import React from 'react';

import './Menu.css';

export default ({ foo }) => (
<div className="menu-row">
  <nav className="horizontal-nav left">
    <ul>
      <li><a href="#" className="nav-item">Defect Prediction</a></li>
    </ul>
  </nav>
  <nav class="horizontal-nav right">
    <ul>
      <li className="container"><a href="#" className="nav-item">About us</a></li>
      <li><a href="#" className="nav-item">Prices</a></li>
      <li><a href="#" className="nav-item">Demo</a></li>
      <li><a href="#" className="nav-item">Manual</a></li>
      <li><a href="#" className="nav-item">Contact us</a></li>
    </ul>
  </nav>
</div>
);
