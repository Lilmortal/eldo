import React from 'react';

import Money from './Money';

test('expect Money to have children', () => {
  const component = <Money cost="120" />;

  expect(component.props.cost).toEqual('120');
});
