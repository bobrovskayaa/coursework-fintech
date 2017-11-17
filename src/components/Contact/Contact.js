import React from 'react';

import './Contact.css';

export default ({ foo }) => (
  <form className="contact-form">
    <div className="form-group">
      <input type="text" id="dynamic-label-input" 
              placeholder="Name"
              className="contact-input" />
      <label for="dynamic-label-input" className="contact-label">Name</label>
    </div>
    <div className="form-group">
      <input type="text" id="dynamic-label-input" 
              placeholder="E-mail"
              className="contact-input" />
      <label for="dynamic-label-input" className="contact-label">E-mail</label>
    </div>
    <div className="form-group">
      <input type="text" id="dynamic-label-input" 
              placeholder="Theme"
              className="contact-input" />
      <label for="dynamic-label-input" className="contact-label">Theme</label>
    </div>
    <div className="form-group">
      <textarea id="dynamic-label-input" 
              placeholder="Message"
              className="contact-input" />
      <label for="dynamic-label-input" className="contact-label">Message</label>
    </div>
    <button className="contact-button" type="submit" required>
      Отправить
    </button>
  </form>
);
