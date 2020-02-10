import React from 'react';

import { createBem, combinedClassNames } from '../../../bem';

import './FlippedCard.css';

const bem = createBem('eldo-FlippedCard');

interface FlippedCardProps {
  className?: string;
  children: React.ReactNode;
}

const FlippedCard: React.FC<FlippedCardProps> = ({
  className,
  children,
}: FlippedCardProps) => (
  <div className={combinedClassNames(bem(), className)}>
    <div className={bem('card')}>{children}</div>
  </div>
);

export default FlippedCard;
