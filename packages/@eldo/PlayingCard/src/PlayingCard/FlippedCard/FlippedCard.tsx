import React from 'react';

import { createBem, combinedClassNames } from '../../../../bem';

import './FlippedCard.scss';

const bem = createBem('eldo-FlippedCard');

export interface FlippedCardProps {
  className?: string;
  isSelected: boolean;
  children: React.ReactNode;
}

const FlippedCard: React.FC<FlippedCardProps> = ({
  className,
  isSelected,
  children,
}: FlippedCardProps) => (
  <div className={combinedClassNames(bem(), className)}>
    <div className={bem('card', isSelected ? 'selected' : '')}>{children}</div>
  </div>
);

export default FlippedCard;
