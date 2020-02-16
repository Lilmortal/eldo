import React from 'react';
import { storiesOf } from '@eldo/storybook';

import Money from './Money';

storiesOf('Money', module).add('default Money', () => <Money cost="$140.00" />);
