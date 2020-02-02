import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@eldo/button';

import './index.css';

const App = () => (
  <Button text="test">
    <div className="test">Wee</div>Test
  </Button>
);

// const App = (): React.SFC<any> => <div>test</div>;

ReactDOM.render(<App />, document.getElementById('root'));
