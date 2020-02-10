import React from 'react';
import { storiesOf } from '@storybook/react';

import Money from './Money';

storiesOf('Money', module).add('default Money', () => <Money cost="$140.00" />);