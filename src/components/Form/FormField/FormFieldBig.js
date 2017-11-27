import React from 'react';

export default ({ text }) => (
    <div className="form-group">
      <textarea type={text} id="dynamic-label-input" 
              placeholder={text}
              className="form-input" />
      <label htmlFor="dynamic-label-input" className="form-label" name={text}>{text}</label>
    </div>
);