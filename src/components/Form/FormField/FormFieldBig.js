import React from 'react';

export default ({ text, color }) => {
  const labelStyle = (color === 'white' ? 'form-label-white' : 'form-label-black');
  const inputStyle = (color === 'white' ? 'form-input-white' : 'form-input-black');
  return (
    <div className="form-group">
      <textarea type={text} id="dynamic-label-input textarea-big" 
              placeholder={text}
              className={inputStyle} />
      <label htmlFor="dynamic-label-input" className={labelStyle} name={text}>{text}</label>
    </div>
)
}