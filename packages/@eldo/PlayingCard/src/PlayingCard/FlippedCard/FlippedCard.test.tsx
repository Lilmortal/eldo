import React from 'react';

import FlippedCard, { FlippedCardProps } from './FlippedCard';

const defaultProps: FlippedCardProps = {
  isSelected: false,
  children: null,
};

test('expect FlippedCard to have children', () => {
  const component = <FlippedCard {...defaultProps}>Test</FlippedCard>;

  expect(component.props.children).toEqual('Test');
});
