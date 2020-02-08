import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('button', module).add('default button', () => (
  <Button value="Value">test</Button>
));
