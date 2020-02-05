import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('test that jest works', () => {
  expect(1 + 1).toEqual(2);
});

test('test that another jest works', () => {
  expect(1 + 1).toEqual(2);
});

test('expect Button to have children', () => {
  render(<Button text="test">Test</Button>);

  expect(screen.queryByText('Test')).toBeInTheDocument();
});
