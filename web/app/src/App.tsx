import React from 'react';

import Button from '@eldo/button';

import './index.css';

const App: React.FunctionComponent<{}> = () => (
  <Button text="test">
    <div className="test">Wee</div>
    Test
  </Button>
);

export default App;
