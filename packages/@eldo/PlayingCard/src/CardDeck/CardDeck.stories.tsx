import React from 'react';
import { storiesOf } from '@eldo/storybook';

import CardDeck from './CardDeck';

storiesOf('PlayingCard/CardDeck', module).add('default CardDeck', () => (
  <CardDeck />
));
