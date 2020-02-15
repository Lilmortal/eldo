import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './Typewriter.scss';

const bem = createBem('eldo-Typewriter');

interface TypewriterProps {
  className?: string;
  children: React.ReactNode;
}

const Typewriter: React.FC<TypewriterProps> = ({
  className,
  children,
}: TypewriterProps) => (
  <div className={combinedClassNames(bem(), className)}>{children}</div>
);

export default Typewriter;
