import React from 'react';
import { storiesOf } from '@storybook/react';

import ThemeSelector from './ThemeSelector';

storiesOf('Theme/ThemeSelector', module).add('default ThemeSelector', () => (
  <ThemeSelector
    onSelected={(test: string) => {
      console.log(test);
    }}
  >
    test
  </ThemeSelector>
));
