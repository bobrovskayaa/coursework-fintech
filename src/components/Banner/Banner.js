import React from 'react';

import './Banner.css';

export default ({ funcChange }) => (
  <div className="banner">
  <div className="banner-text-big">
    Welcome to <br />Defect Prediction
  </div>
  <div className="banner-text-small">
    Safe your releases.
  </div>
  <div className="banner-button" onClick={()=> funcChange('form')}>
    Contact us
  </div>
</div> 
);
