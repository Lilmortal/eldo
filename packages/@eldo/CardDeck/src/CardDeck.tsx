import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './CardDeck.scss';

const bem = createBem('eldo-CardDeck');

interface CardDeckProps {
  className?: string;
  onClick?(): void;
}

const CardDeck: React.FC<CardDeckProps> = ({
  className,
}: // onClick,
CardDeckProps) => <div className={combinedClassNames(bem(), className)} />;

export default CardDeck;
