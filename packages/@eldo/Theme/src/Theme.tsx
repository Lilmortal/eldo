import React, { useState, useCallback } from 'react';

import Button from '@eldo/button';
import { createBem, combinedClassNames } from '../../bem';

import ThemeSelector from './ThemeSelector';
import './Theme.scss';

const bem = createBem('eldo-Theme');

export const selectionList = ['default', 'dark', 'green'] as const;
type SelectionTuple = typeof selectionList;
export type Selection = SelectionTuple[number];

interface ThemeProps {
  className?: string;
}

// TODO: Add state to change data-theme
const Theme: React.FC<ThemeProps> = ({ className }: ThemeProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [selected, setSelected] = useState<Selection>('default');

  const handleSelected = (selection: Selection) => {
    setSelected(selection);
  };

  const handleExpanded = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <div className={combinedClassNames(bem(), className)}>
      <Button
        className={bem('opener')}
        value="Open theme"
        onClick={handleExpanded}
      >
        Button
      </Button>
      <ThemeSelector
        selected={selected}
        onSelected={handleSelected}
        expanded={expanded}
      />
    </div>
  );
};

export default Theme;
