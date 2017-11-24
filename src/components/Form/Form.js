import React from 'react';
import Button from '../Button/Button'
import FormField from './FormField/FormField'
import FormFieldBig from './FormField/FormFieldBig'

import './Form.css';

export default ({ foo }) => (
  <form className="form-body" method="post" action="mail.php">
    <FormField text="Name" />
    <FormField text="Mail" />
    <FormField text="Theme" />
    <FormFieldBig text="Message" />
    <Button text="Отправить" style="form-button" />
  </form>
);
