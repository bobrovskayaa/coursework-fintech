import React from 'react';

export default ({ text }) => (
    <div className="form-group">
      <input type={text} id="dynamic-label-input" 
              placeholder="Name"
              className="form-input" />
      <label for="dynamic-label-input" className="form-label" name={text}>{text}</label>
    </div>
);