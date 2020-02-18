import React from 'react';

import ThemeSelector, { ThemeSelectorProps } from './ThemeSelector';

const onSelected = jest.fn();

const defaultProps: ThemeSelectorProps = {
  selected: 'default',
  onSelected,
};

test('expect ThemeSelector to have children', () => {
  const component = <ThemeSelector {...defaultProps}>Test</ThemeSelector>;

  expect(component.props.children).toEqual('Test');
});
