import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../../Button';
import ButtonGroup from './ButtonGroup';

storiesOf('ButtonGroup', module).add('default ButtonGroup', () => (
  <div style={{ width: 500, height: 500 }}>
    <ButtonGroup>
      <Button value="VALUE">Test</Button>
      <Button value="More value">Wee</Button>
      <Button value="More value">345</Button>
      <Button value="More value">Pat</Button>
      <Button value="More value">Durp</Button>
    </ButtonGroup>
  </div>
));
