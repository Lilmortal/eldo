import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './Loader.css';

const bem = createBem('eldo-Loader');

interface LoaderProps {
  className?: string;
  children: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({
  className,
  children,
}: LoaderProps) => (
  <div className={combinedClassNames(bem(), className)}>{children}</div>
);

export default Loader;
