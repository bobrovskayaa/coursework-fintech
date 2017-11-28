import React from 'react';

import './Wrapper.css';

export default ({ header, children }) => {
    return (
    <div className='wrapper-about-item'>
        <div className='wrapper-about-header'>
          {header}
        </div>
        <div className='wrapper-about-text'>
          {children}
        </div>
    </div>
    )
}