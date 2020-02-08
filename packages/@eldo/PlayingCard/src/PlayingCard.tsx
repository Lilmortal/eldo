import React from 'react';

import { createBem, combinedClassNames } from '../../bem';
import FlippedCard from './FlippedCard';
import UnFlippedCard from './UnFlippedCard';

import './PlayingCard.css';

const bem = createBem('eldo-PlayingCard');

interface PlayingCardProps {
  className?: string;
  isFlipped: boolean;
  flippedCard?: string;
}

const PlayingCard: React.FunctionComponent<PlayingCardProps> = ({
  className,
  isFlipped,
}: PlayingCardProps) => (
  <div className={combinedClassNames(bem(), className)}>
    {isFlipped ? <FlippedCard /> : <UnFlippedCard />}
  </div>
);

export default PlayingCard;
