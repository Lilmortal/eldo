import React from 'react';

import Typewriter from './Typewriter';

test('expect Typewriter to have children', () => {
  const component = <Typewriter>Test</Typewriter>;

  expect(component.props.children).toEqual('Test');
});
