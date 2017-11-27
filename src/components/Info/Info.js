import React from 'react';
import InfoItem from '../InfoItem/InfoItem'
import Wrapper from '../Wrapper/Wrapper'

export default ({ foo }) => (
  <Wrapper
    header="About us" 
    descr="For companies which develop software to find bugs in the earliest stages of development." 
    tag="about">
      <div>
        <InfoItem id='0'/>
        <InfoItem id='1'/>
        <InfoItem id='2'/>
      </div>
  </Wrapper>
);