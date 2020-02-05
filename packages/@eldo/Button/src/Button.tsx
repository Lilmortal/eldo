import React from 'react';

import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  text: string;
  className?: string;
  style?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  children,
}: ButtonProps) => (
  <button value={text} className="Button" type="button">
    <div className="button__test">{children}</div>
  </button>
);

export default Button;
