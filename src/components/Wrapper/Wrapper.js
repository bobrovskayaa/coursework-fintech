import React from 'react';

import './Wrapper.css';

export default ({ header, descr, tag, children }) => {
  return (
    <div className="wrapper" id={tag}>
      <div className="wrapper-text-big"> {header} </div>
      <div className="wrapper-text-small"> {descr} </div>
      {children}
    </div>
  )
};
