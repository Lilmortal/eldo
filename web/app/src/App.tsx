import React from 'react';

import Button from '@eldo/button';

import './index.scss';

const App: React.FC<{}> = () => (
  <div>
    <Button
      value="test"
      onClick={() => {
        console.log('test');
      }}
    >
      Test
    </Button>
    <div className="text">Test test test</div>
    <h1>test</h1>
  </div>
);

export default App;
