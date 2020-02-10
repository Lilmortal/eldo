import React from 'react';

import { createBem, combinedClassNames } from '../../bem';
import FlippedCard from './FlippedCard';
import UnFlippedCard from './UnFlippedCard';

import './PlayingCard.css';

const bem = createBem('eldo-PlayingCard');

interface PlayingCardProps {
  className?: string;
  isFlipped?: boolean;
  isSelected?: boolean;
  value: React.ReactNode;
}

interface CardProps {
  value: React.ReactNode;
}

const PlayingCard: React.FC<PlayingCardProps> = ({
  className,
  isFlipped = false,
  isSelected = false,
  value,
}: PlayingCardProps) => (
  <div
    className={combinedClassNames(
      bem('', isSelected ? 'isSelected' : ''),
      className
    )}
  >
    {isFlipped ? <FlippedCard>{value}</FlippedCard> : <UnFlippedCard />}
  </div>
);

export default PlayingCard;
