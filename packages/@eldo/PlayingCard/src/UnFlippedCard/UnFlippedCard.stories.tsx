import React from 'react';
import { storiesOf } from '@storybook/react';

import UnFlippedCard from './UnFlippedCard';

storiesOf('UnFlippedCard', module).add('default unflipped card', () => (
  <UnFlippedCard>test</UnFlippedCard>
));
