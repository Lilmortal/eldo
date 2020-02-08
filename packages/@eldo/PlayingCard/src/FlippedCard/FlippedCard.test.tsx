import React from 'react';

import FlippedCard from './FlippedCard';

test('expect FlippedCard to have children', () => {
  const component = <FlippedCard>Test</FlippedCard>;

  expect(component.props.children).toEqual('Test');
});
