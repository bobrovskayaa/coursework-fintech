import React from 'react';
import Button from '../Button/Button'

import './Banner.css'

export default ({ funcChange }) => (
  <div className="banner">
    <div style={{ margin: '150px auto 80px' }}>
      <div className="banner-text-big">
        Welcome to Sybil
      </div>
      <div className="banner-text-small">
        Safe your releases.
      </div>
      <Button text="Contact us" onClick={()=> funcChange('form')} btnStyle="banner-button"/>
  </div>
</div> 
);
