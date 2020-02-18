import React from 'react';
import { storiesOf } from '@eldo/storybook';

import PlayingCard from './PlayingCard';

storiesOf('PlayingCard', module)
  .add('unflipped playing card', () => <PlayingCard value={4} />)
  .add('flipped playing card', () => <PlayingCard value={4} isFlipped />)
  .add('selected playing card', () => (
    <PlayingCard value={4} isFlipped isSelected />
  ));
