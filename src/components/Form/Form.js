import React from 'react';
import Wrapper from '../Wrapper/Wrapper'
import Button from '../Button/Button'
import FormField from './FormField/FormField'
import FormFieldBig from './FormField/FormFieldBig'

import './Form.css';

const descr = "Have questions? Want to order? Please, feel free to contact us.";

export default ({ foo }) => (
  <Wrapper
    header="Contact us" descr={descr} tag="form">
      <form className="form-body">
        <FormField text="Name" />
        <FormField text="Mail" />
        <FormField text="Theme" />
        <FormFieldBig text="Message" />
        <Button text="Отправить" style="form-button" />
      </form>
  </Wrapper>
);
