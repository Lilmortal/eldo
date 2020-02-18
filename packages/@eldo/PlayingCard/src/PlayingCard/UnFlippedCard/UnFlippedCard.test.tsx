import React from 'react';

import UnFlippedCard from './UnFlippedCard';

test('expect UnFlippedCard to have children', () => {
  const component = <UnFlippedCard>Test</UnFlippedCard>;

  expect(component.props.children).toEqual('Test');
});
