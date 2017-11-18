import React from 'react';

import './Demo.css';

export default ({ foo }) => (
<div>
  <div class="demo-item"> 
    <div class="demo-subitem"> 
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
    <div class="demo-subitem"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
    </div>
  </div>
</div>
);