import React from 'react';

import Animation from './Animation';

test('expect Animation to have children', () => {
  const component = <Animation>Test</Animation>;

  expect(component.props.children).toEqual('Test');
});
