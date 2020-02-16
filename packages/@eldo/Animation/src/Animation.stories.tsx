import React from 'react';
import { storiesOf } from '@eldo/storybook';

import Animation from './Animation';

storiesOf('Animation', module).add('default Animation', () => (
  <Animation>test</Animation>
));
