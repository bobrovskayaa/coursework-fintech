import React from 'react';

export default ({ text, value, onChange, color }) => {
  const labelStyle = (color === 'white' ? 'form-label-white' : 'form-label-black');
  const inputStyle = (color === 'white' ? 'form-input-white' : 'form-input-black');
  return (
    <div className="form-group">
      <input type={text} id="dynamic-label-input" 
              placeholder={text}
              className={inputStyle} 
              value={value}
              onChange={onChange}/>
      <label htmlFor="dynamic-label-input" className={labelStyle} name={text}>{text}</label>
    </div>
  )
};