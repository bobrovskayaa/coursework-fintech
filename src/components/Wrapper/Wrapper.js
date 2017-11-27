import React from 'react';

import './Wrapper.css';

export default ({ header, descr, tag, children }) => {
  return (
    <div className="info" id={tag}>
      <div className="info-text-big"> {header} </div>
      <div className="info-text-small"> {descr} </div>
      {children}
    </div>
  )
};
