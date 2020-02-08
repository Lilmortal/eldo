import React from 'react';

import { createBem, combinedClassNames } from '../../../bem';

import './UnFlippedCard.css';

const bem = createBem('eldo-UnFlippedCard');

interface UnFlippedCardProps {
  className?: string;
  children?: React.ReactNode;
}

const UnFlippedCard: React.FC<UnFlippedCardProps> = ({
  className,
  children,
}: UnFlippedCardProps) => (
  <div className={combinedClassNames(bem(), className)}>{children}</div>
);

export default UnFlippedCard;
