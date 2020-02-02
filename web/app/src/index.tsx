import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@eldo/ui/Button';

console.log(Button, 'test');
const App = () => <Button text="test">Test</Button>;

// const App = (): React.SFC<any> => <div>test</div>;

ReactDOM.render(<App />, document.getElementById('root'));
