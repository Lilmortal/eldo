import React from 'react';
import { storiesOf } from '@eldo/storybook';

import FlippedCard from './FlippedCard';

storiesOf('PlayingCard/FlippedCard', module).add('default flipped card', () => (
  <FlippedCard>test</FlippedCard>
));
