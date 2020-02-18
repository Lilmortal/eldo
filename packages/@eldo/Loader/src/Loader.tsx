import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './Loader.scss';

const bem = createBem('eldo-Loader');

interface LoaderProps {
  className?: string;
  children: React.ReactNode;
}

const getBars = (num: number) => {
  const bars = [];
  for (let i = 0; i < num; i += 1) {
    bars.push(<span className={bem(`bar${i}`)} key={i} />);
  }

  return bars;
};

const Loader: React.FC<LoaderProps> = ({ className }: LoaderProps) => (
  <div className={combinedClassNames(bem(), className)}>{getBars(20)}</div>
);

export default Loader;
