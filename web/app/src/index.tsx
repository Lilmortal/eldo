import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@eldo/button';

import './index.css';

const App: React.FunctionComponent<{}> = () => (
  <Button text="test">
    <div className="test">Wee</div>Test
  </Button>
);

ReactDOM.render(<App />, document.getElementById('root'));
