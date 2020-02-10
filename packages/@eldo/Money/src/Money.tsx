import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './Money.css';

const bem = createBem('eldo-Money');

interface MoneyProps {
  className?: string;
  cost: string;
}

const Money: React.FC<MoneyProps> = ({ className, cost }: MoneyProps) => (
  <div className={combinedClassNames(bem(), className)}>{cost}</div>
);

export default Money;
