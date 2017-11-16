import React from 'react';

import './Contact.css';

export default ({ foo }) => (
  <form className="contact-form">
    <input className="contact-input" placeholder="ФИО" required />
    <input className="contact-input" placeholder="E-mail" required />
    <input className="contact-input" placeholder="Тема" required />
    <textarea className="contact-input" placeholder="Сообщение" required />
    <button className="contact-button" type="submit" required>
      Отправить
    </button>
  </form>
);
