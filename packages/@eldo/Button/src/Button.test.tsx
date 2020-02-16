import React from 'react';
import { render, screen } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

const defaultProps: ButtonProps = {
  children: null,
  value: 'Test',
  onClick: jest.fn(),
};

test('expect Button to have children', () => {
  render(<Button {...defaultProps}>Test</Button>);

  expect(screen.queryByText('Test')).toBeInTheDocument();
});
