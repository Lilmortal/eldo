import React from "react";

import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  text: string;
  className?: string;
  style?: string;
}

const Button = ({ text, children }: ButtonProps) => (
  <button value={text} className="Button" type="button">
    {children}
  </button>
);

export default Button;
