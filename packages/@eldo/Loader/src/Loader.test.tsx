import React from 'react';

import Loader from './Loader';

test('expect Loader to have children', () => {
  const component = <Loader>Test</Loader>;

  expect(component.props.children).toEqual('Test');
});
