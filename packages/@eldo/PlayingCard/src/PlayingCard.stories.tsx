import React from 'react';
import { storiesOf } from '@storybook/react';

import PlayingCard from './PlayingCard';

storiesOf('PlayingCard', module)
  .add('unflipped playing card', () => <PlayingCard isFlipped={false} />)
  .add('flipped playing card', () => <PlayingCard isFlipped />);
