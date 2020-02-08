import React from 'react';

import ButtonGroup from './ButtonGroup';

test('expect ButtonGroup to have children', () => {
  const component = <ButtonGroup>Test</ButtonGroup>;

  expect(component.props.children).toEqual('Test');
});
