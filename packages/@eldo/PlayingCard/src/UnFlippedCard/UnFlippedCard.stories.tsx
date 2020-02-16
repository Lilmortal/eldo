import React from 'react';
import { storiesOf } from '@eldo/storybook';

import UnFlippedCard from './UnFlippedCard';

storiesOf('PlayingCard/UnFlippedCard', module).add(
  'default unflipped card',
  () => <UnFlippedCard>test</UnFlippedCard>
);
