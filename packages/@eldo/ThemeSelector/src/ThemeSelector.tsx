import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import './ThemeSelector.css';

const bem = createBem('eldo-ThemeSelector');

interface ThemeSelectorProps {
  className?: string;
  children: React.ReactNode;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  children,
}: ThemeSelectorProps) => (
  <div className={combinedClassNames(bem(), className)}>{children}</div>
);

export default ThemeSelector;
