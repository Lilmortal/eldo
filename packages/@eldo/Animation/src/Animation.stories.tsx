import React from 'react';
import { storiesOf } from '@storybook/react';

import Animation from './Animation';

storiesOf('Animation', module).add('default Animation', () => (
  <Animation>test</Animation>
));
