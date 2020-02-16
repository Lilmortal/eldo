import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './Button.scss';

export interface ButtonProps {
  children: React.ReactNode;
  value: string;
  onClick(): void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const bem = createBem('eldo-Button');

const Button: React.FC<ButtonProps> = ({
  children,
  value,
  onClick,
  disabled = false,
  className,
  style,
}: ButtonProps) => (
  <button
    value={value}
    className={combinedClassNames(bem(), className)}
    onClick={onClick}
    style={style}
    type="button"
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
