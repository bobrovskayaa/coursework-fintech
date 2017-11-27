import React from 'react';
import Wrapper from '../Wrapper/Wrapper'

import './Demo.css';

export default ({ foo }) => (
  <Wrapper
    header="Demo" descr="There will be demo" tag="demo">
      <div>
        <div className="demo-item"> 
          <div className="demo-subitem"> 
            <button className="demo-button" type="submit" required>
              1. Choose the file
            </button>
            <button className="demo-button" type="submit" required>
              2. Upload to server
            </button>
            <button className="demo-button" type="submit" required>
              3. Wait results
            </button>
          </div>
          <div className="demo-subitem"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
          </div>
        </div>
      </div>
  </Wrapper>
);