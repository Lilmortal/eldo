import React from 'react';

import { createBem, combinedClassNames } from '../../bem';

import ThemeSelector from './ThemeSelector';
import './Theme.css';

const bem = createBem('eldo-Theme');

interface ThemeProps {
  className?: string;
  children: React.ReactNode;
}

// TODO: Add state to change data-theme
const Theme: React.FC<ThemeProps> = ({ className, children }: ThemeProps) => {
  const onSelected = (selection: string) => {
    console.log(selection);
  };

  return (
    <div className={combinedClassNames(bem(), className)}>
      <div className={bem('selector')}>
        <ThemeSelector onSelected={onSelected} />
      </div>
      {children}
    </div>
  );
};

export default Theme;
