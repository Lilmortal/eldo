import React from 'react';
import { storiesOf } from '@eldo/storybook';

import Typewriter from './Typewriter';

storiesOf('Typewriter', module).add('default Typewriter', () => (
  <Typewriter>test</Typewriter>
));
