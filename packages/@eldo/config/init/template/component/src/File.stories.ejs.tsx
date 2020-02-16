import React from 'react';
import { storiesOf } from '@eldo/storybook';

import <%= projectName %> from './<%= projectName %>';

storiesOf('<%= projectName %>', module).add('default <%= projectName %>', () => (
  <<%= projectName %>>test</<%= projectName %>>
));
