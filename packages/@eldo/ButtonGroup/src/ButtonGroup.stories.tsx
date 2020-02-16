import React from 'react';
import { storiesOf, action } from '@eldo/storybook';

import Button from '../../Button';
import ButtonGroup from './ButtonGroup';

const style = {
  width: 500,
  height: 500,
};

storiesOf('ButtonGroup', module).add('default ButtonGroup', () => (
  <div style={style}>
    <ButtonGroup>
      <Button value="VALUE" onClick={action('Button 1 clicked.')}>
        Test
      </Button>
      <Button value="More value" onClick={action('Button 1 clicked.')}>
        Wee
      </Button>
      <Button value="More value" onClick={action('Button 2 clicked.')}>
        345
      </Button>
      <Button value="More value" onClick={action('Button 3 clicked.')}>
        Pat
      </Button>
      <Button value="More value" onClick={action('Button 4 clicked.')}>
        Durp
      </Button>
    </ButtonGroup>
  </div>
));
