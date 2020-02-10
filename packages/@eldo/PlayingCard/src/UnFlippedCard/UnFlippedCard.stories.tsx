import React from 'react';
import { storiesOf } from '@storybook/react';

import UnFlippedCard from './UnFlippedCard';

storiesOf('PlayingCard/UnFlippedCard', module).add(
  'default unflipped card',
  () => <UnFlippedCard>test</UnFlippedCard>
);
