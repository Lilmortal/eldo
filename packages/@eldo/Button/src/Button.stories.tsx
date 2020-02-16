import React from 'react';
import { action, storiesOf } from '@eldo/storybook';

import Button, { ButtonProps } from './Button';

const defaultProps: ButtonProps = {
  value: 'Value',
  children: <div>Test</div>,
  onClick: action('button clicked.'),
};

storiesOf('Button', module)
  .add('default', () => <Button {...defaultProps} />)
  .add('disabled', () => <Button {...defaultProps} disabled />);
