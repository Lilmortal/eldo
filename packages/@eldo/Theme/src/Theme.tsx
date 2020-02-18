import React, { useState } from 'react';

import { createBem, combinedClassNames } from '../../bem';

import ThemeSelector from './ThemeSelector';
import './Theme.scss';

const bem = createBem('eldo-Theme');

export type Selection = 'default' | 'dark';

interface ThemeProps {
  className?: string;
}

// TODO: Add state to change data-theme
const Theme: React.FC<ThemeProps> = ({ className }: ThemeProps) => {
  const [selected, setSelected] = useState<Selection>('default');
  const onSelected = (selection: Selection) => {
    setSelected(selection);
  };

  return (
    <div className={combinedClassNames(bem(), className)}>
      <div className={bem('opener')} />
      <div className={bem('selector')}>
        <ThemeSelector selected={selected} onSelected={onSelected} />
      </div>
    </div>
  );
};

export default Theme;
