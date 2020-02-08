import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './Animation.css';

const bem = createBem('eldo-Animation');

interface AnimationProps {
  className?: string;
  children: React.ReactNode;
}

const Animation: React.FC<AnimationProps> = ({
  className,
  children,
}: AnimationProps) => (
  <div className={combinedClassNames(bem(), className)}>{children}</div>
);

export default Animation;
