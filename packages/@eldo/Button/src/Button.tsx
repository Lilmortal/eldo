import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  onClick?(): void;
  style?: string;
}

const bem = createBem('eldo-Button');

const Button: React.FC<ButtonProps> = ({
  value,
  className,
  // style,
  onClick,
  children,
}: ButtonProps) => (
  <button
    value={value}
    className={combinedClassNames(bem(), className)}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default Button;
