import React from 'react';
import Wrapper from '../Wrapper/Wrapper'

import './Manual.css';

export default ({ foo }) => (
  <Wrapper
    header="Manual" descr="This manual for users whom already have DP program" 
    tag="manual">
      <div>
        <div className="manual-item"> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
        </div>
      </div>
  </Wrapper>
);