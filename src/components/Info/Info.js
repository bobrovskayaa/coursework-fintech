import React from 'react';

import './Info.css';

export default ({ header }) => (
  <div class="info">
  <div class="info-text-big"> {header} </div>
  <div class="info-text-small"> ............ </div>
  <div class="info-descr">
    <div class="info-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
    <div class="info-item">col2</div>
    <div class="info-item">col3</div>
  </div>
</div>
);
