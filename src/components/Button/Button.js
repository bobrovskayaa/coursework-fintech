import React from 'react';

export default ({ onClick, text, style }) => (
  <div className={style} onClick={onClick}>
      {text}
  </div>
);