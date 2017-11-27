import React from 'react';
import InfoItem from '../InfoItem/InfoItem'
import Wrapper from '../Wrapper/Wrapper'

export default ({ foo }) => (
  <Wrapper
    header="About us" 
    descr="For companies which develop software to find bugs in the earliest stages of development." 
    tag="about">
      <div>
        <InfoItem text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.'/>
        <InfoItem text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.'/>
        <InfoItem text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.'/>
      </div>
  </Wrapper>
);