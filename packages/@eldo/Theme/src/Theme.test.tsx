import React from 'react';

import Theme from './Theme';

test('expect Theme to have children', () => {
  const component = <Theme>Test</Theme>;

  expect(component.props.children).toEqual('Test');
});
