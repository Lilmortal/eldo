import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './Money.css';

const bem = createBem('eldo-Money');

interface MoneyProps {
  className?: string;
  children: React.ReactNode;
}

const Money: React.FC<MoneyProps> = ({ className, children }: MoneyProps) => (
  <div className={combinedClassNames(bem(), className)}>{children}</div>
);

export default Money;
