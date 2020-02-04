import React from 'react';

import <%= projectName %> from './<%= projectName %>';

test('expect <%= projectName %> to have children', () => {
  const component = <<%= projectName %>>Test</<%= projectName %>>;

  expect(component.props.children).toEqual('Test');
});
