import React from 'react';

import './Wrapper.css';

export default ({ header, descr, children, wrpStyle, tag}) => {
  const wrpItem = 'wrapper-' + wrpStyle + '-item';
  const wrpHeader = 'wrapper-' + wrpStyle + '-header';
  return (
    <div className={wrpItem} id={tag}>
        <div className={wrpHeader}>
          {header}
        </div>
        <div className="wrapper-main-subtitle"> 
          {descr} 
        </div>
        <div className='wrapper-about-text'>
          {children}
        </div>
    </div>
    )
}