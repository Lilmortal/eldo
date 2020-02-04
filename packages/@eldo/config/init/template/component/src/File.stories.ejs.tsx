import React from 'react';
import { storiesOf } from '@storybook/react';

import <%= projectName %> from './<%= projectName %>';

storiesOf('<%= projectName %>', module).add('default <%= projectName %>', () => (
  <<%= projectName %>>test</<%= projectName %>>
));
