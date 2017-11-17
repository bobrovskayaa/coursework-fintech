import React from 'react';
import InfoList from '../InfoList/InfoList'
import Contact from '../Contact/Contact'
import Manual from '../Manual/Manual'
import Demo from '../Demo/Demo'

import './Info.css';

export default ({ header, descr, tag }) => {
  function chooseContent(tag) {
    switch (tag) {
      case 'infolist':
        return <InfoList />;
      case 'contact':
        return <Contact />;
      case 'manual':
        return <Manual />;
      case 'demo':
        return <Demo />;
      default:
        return "";
    }
  }
  return (
    <div className="info">
      <div className="info-text-big"> {header} </div>
      <div className="info-text-small"> {descr} </div>
      {chooseContent(tag)}
    </div>
  )
};
