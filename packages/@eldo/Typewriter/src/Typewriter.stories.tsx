import React from 'react';
import { storiesOf } from '@storybook/react';

import Typewriter from './Typewriter';

storiesOf('Typewriter', module).add('default Typewriter', () => (
  <Typewriter>test</Typewriter>
));
