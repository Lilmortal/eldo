import React from 'react';
import { storiesOf } from '@storybook/react';

import FlippedCard from './FlippedCard';

storiesOf('PlayingCard/FlippedCard', module).add('default flipped card', () => (
  <FlippedCard>test</FlippedCard>
));
