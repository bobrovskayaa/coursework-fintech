import React from 'react';
import Button from '../Button/Button'

import './Banner.css'

export default ({ funcChange }) => (
  <div className="banner">
  <div className="banner-text-big">
    Welcome to <br />Defect Prediction
  </div>
  <div className="banner-text-small">
    Safe your releases.
  </div>
  <Button text="Contact us" onClick={()=> funcChange('form')} style="banner-button"/>
</div> 
);
