import React from 'react';

import Money from './Money';

test('expect Money to have children', () => {
  const component = <Money>Test</Money>;

  expect(component.props.children).toEqual('Test');
});
