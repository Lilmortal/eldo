import React from 'react';

import ThemeSelector from './ThemeSelector';

test('expect ThemeSelector to have children', () => {
  const component = <ThemeSelector>Test</ThemeSelector>;

  expect(component.props.children).toEqual('Test');
});
