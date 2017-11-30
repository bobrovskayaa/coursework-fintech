import React from 'react';

export default ({ onClick, text, btnStyle }) => (
  <div className={btnStyle} onClick={onClick}>
      {text}
  </div>
);