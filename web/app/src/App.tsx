import React from 'react';

import Button from '@eldo/button';
import { createBem } from '@eldo/bem';

import './index.scss';

const bem = createBem('eldo-App');

const App: React.FC<{}> = () => (
  <div className={bem()}>
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
