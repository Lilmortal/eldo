import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './ButtonGroup.scss';

const bem = createBem('eldo-ButtonGroup');

interface ButtonGroupProps {
  isHorizontal?: boolean;
  className?: string;
  children: React.ReactNode;
}

// TODO: use react hooks to add state to determine which button is submitted
const ButtonGroup: React.FC<ButtonGroupProps> = ({
  isHorizontal = false,
  className,
  children,
}: ButtonGroupProps) => (
  <div
    className={combinedClassNames(
      bem('', isHorizontal ? 'isHorizontal' : ''),
      className
    )}
  >
    {children}
  </div>
);

export default ButtonGroup;
