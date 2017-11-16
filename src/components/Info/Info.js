import React from 'react';
import InfoList from '../InfoList/InfoList'
import Contact from '../Contact/Contact'

import './Info.css';

export default ({ header, descr, in_type }) => {

  return (
    <div className="info">
      <div className="info-text-big"> {header} </div>
      <div className="info-text-small"> {descr} </div>
      {in_type === 'infolist' ? <InfoList /> : ""}
      {in_type === 'contact' ? <Contact /> : ""}
    </div>
  )
};
