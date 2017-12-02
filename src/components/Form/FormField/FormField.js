import React from 'react';

export default ({ isBig, text, value, onChange, color }) => {
  const labelStyle = (color === 'white' ? 'form-label-white' : 'form-label-black');
  let inputStyle = (color === 'white' ? 'form-input-white' : 'form-input-black');
  const Tag = isBig ? 'textarea' : 'input';
  inputStyle += ' ' + (isBig ? 'textarea-big' : '');
  return (
    <div className="form-group">
      <Tag type={text} id="dynamic-label-input" 
              placeholder={text}
              className={inputStyle}
              value={value}
              onChange={onChange}/>
      <label htmlFor="dynamic-label-input" className={labelStyle} name={text}>{text}</label>
    </div>
  )
};