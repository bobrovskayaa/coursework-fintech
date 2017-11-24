import React from 'react';
import Button from '../Button/Button'

import './Form.css';

export default ({ foo }) => (
  <form className="form-body" method="post" action="mail.php">
    <div className="form-group">
      <input type="text" id="dynamic-label-input" 
              placeholder="Name"
              className="form-input" />
      <label for="dynamic-label-input" className="form-label" name="name">Name</label>
    </div>
    <div className="form-group">
      <input type="text" id="dynamic-label-input" 
              placeholder="E-mail"
              className="form-input" />
      <label for="dynamic-label-input" className="form-label" name="email">E-mail</label>
    </div>
    <div className="form-group">
      <input type="text" id="dynamic-label-input" 
              placeholder="Theme"
              className="form-input" />
      <label for="dynamic-label-input" className="form-label">Theme</label>
    </div>
    <div className="form-group">
      <textarea id="dynamic-label-input" 
              placeholder="Message"
              className="form-input" />
      <label for="dynamic-label-input" className="form-label" name="mess">Message</label>
    </div>
    {/* <button className="form-button" type="submit" required>
      Отправить
    </button> */}
    <Button text="Отправить" style="form-button" />
  </form>
);
