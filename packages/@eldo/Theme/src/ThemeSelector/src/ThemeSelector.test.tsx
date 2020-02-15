import React from 'react';

import ThemeSelector from './ThemeSelector';

const onSelected = jest.fn();

test('expect ThemeSelector to have children', () => {
  const component = <ThemeSelector onSelected={onSelected}>Test</ThemeSelector>;

  expect(component.props.children).toEqual('Test');
});
