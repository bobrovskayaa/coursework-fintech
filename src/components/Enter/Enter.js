import React from 'react';
import FormField from '../Form/FormField/FormField'
import Button from '../Button/Button'

import './Enter.css'

export default ({ funcChange }) => (
  <div>
    <div style={{ margin: '150px auto 80px' }}>
      <div className='enter-block'>
        <form className="enter-body">
          <FormField text="Login" />
          <FormField text="Password" />
          <Button text="Log in" style="banner-button" />
        </form>
      </div>
      <div className='enter-block'>
        <p className='text-small'>
          Вы сможете обновить токен после входа в систему
        </p>
        <input type="text" placeholder='Токен' className="form-input enter-input" readonly="readonly" />
        <Button text="Обновить токен" style="banner-button" />
      </div>
    </div>
  </div> 
);