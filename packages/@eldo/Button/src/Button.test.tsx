import React from 'react';

import Button from './Button';

test('test that jest works', () => {
  expect(1 + 1).toEqual(2);
});

test('test that another jest works', () => {
  expect(1 + 1).toEqual(2);
});

test('expect Button to have children', () => {
  const button = <Button text="test">Test</Button>;

  // use react testing library
  expect(button.props.children).toEqual('Test');
});
