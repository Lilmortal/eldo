import React from 'react';

import { createBem, combinedClassNames } from '../../../bem';

import './UnFlippedCard.css';

const bem = createBem('eldo-UnFlippedCard');

interface UnFlippedCardProps {
  className?: string;
}

const UnFlippedCard: React.FC<UnFlippedCardProps> = ({
  className,
}: UnFlippedCardProps) => (
  <div className={combinedClassNames(bem(), className)} />
);

export default UnFlippedCard;
