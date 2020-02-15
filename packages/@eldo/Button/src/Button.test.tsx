import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('expect Button to have children', () => {
  render(<Button value="test">Test</Button>);

  expect(screen.queryByText('Test')).toBeInTheDocument();
});
