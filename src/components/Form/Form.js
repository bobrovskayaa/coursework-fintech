import React from 'react';
import Wrapper from '../Wrapper/Wrapper'
import Button from '../Button/Button'
import FormField from './FormField/FormField'

import './Form.css';

const descr = "Have questions? Want to order? Please, feel free to contact us.";

export default ({ foo }) => (
  <Wrapper
    header="Contact us" descr={descr} tag="form" wrpStyle='main'>
      <form className="form-body">
        <FormField text="Name" color='black' />
        <FormField text="Mail" color='black' />
        <FormField text="Theme" color='black' />
        <FormField isBig='1' text="Message" color='black' className='textarea-big' />
        <Button text="Отправить" btnStyle="form-button" color='black' />
      </form>
  </Wrapper>
);
