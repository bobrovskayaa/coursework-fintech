import React from 'react';

import './Wrapper.css';

export default ({ header, children}) => {
  return (
    <div className='wrapper-manual-item'>
        <div className='wrapper-manual-header'>
          {header}
        </div>
        <div className='wrapper-manual-text'>
          {children}
        </div>
    </div>
    )
}