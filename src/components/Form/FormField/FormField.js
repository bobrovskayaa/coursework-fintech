import React from 'react';

export default ({ isBig, text, value, onChange, color }) => {
  const labelStyle = (color === 'white' ? 'form-label-white' : 'form-label-black');
  let inputStyle = (color === 'white' ? 'form-input-white' : 'form-input-black');
  const Tag = isBig ? 'textarea' : 'input';
  inputStyle += ' ' + (isBig ? 'textarea-big' : '');
  let pattern='*';
  let spanText='';
  if (text === 'Email') {
    pattern = '^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+)[.]([a-z.]{2,6})$';
    spanText = 'Введите email в формате логин@поддомен.домен';
  }
  if (text === 'Password') {
    pattern = '^[a-zA-Z0-9_-]{6,18}$';
    spanText = 'Пароль должен содержать латинские буквы, цифры, дефисы и подчёркивания, от 6 дo 18 символов';
  }
  return (
    <div className="form-group">
      <Tag id="dynamic-label-input" 
              placeholder={text}
              className={inputStyle}
              value={value}
              onChange={onChange} 
              pattern={pattern}/>
      <label htmlFor="dynamic-label-input" className={labelStyle} name={text}>{text}</label>
      <span className="form-info">{spanText}</span>
    </div>
  )
};