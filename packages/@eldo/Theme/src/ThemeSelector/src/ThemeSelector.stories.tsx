import React from 'react';
import { storiesOf } from '@eldo/storybook';

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
