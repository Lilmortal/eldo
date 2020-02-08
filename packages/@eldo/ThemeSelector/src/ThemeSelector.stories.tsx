import React from 'react';
import { storiesOf } from '@storybook/react';

import ThemeSelector from './ThemeSelector';

storiesOf('ThemeSelector', module).add('default ThemeSelector', () => (
  <ThemeSelector>test</ThemeSelector>
));
