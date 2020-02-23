import React from 'react';
import { storiesOf } from '@eldo/storybook';

import SelectionScreen from './SelectionScreen';

const defaultProps = {};

storiesOf('Selection Screen', module).add('default', () => (
  <SelectionScreen {...defaultProps} />
));
