import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './Theme.css';

const bem = createBem('eldo-Theme');

interface ThemeProps {
  className?: string;
  children: React.ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ className, children }: ThemeProps) => (
  <div className={combinedClassNames(bem(), className)}>{children}</div>
);

export default Theme;
