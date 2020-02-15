import React from 'react';

import { createBem, combinedClassNames } from '../../../../bem';

import './ThemeSelector.scss';

const bem = createBem('eldo-ThemeSelector');

// TODO: Can you read postCSS variables in JS?
const options = ['default', 'dark'];

interface ThemeSelectorProps {
  onSelected(selection: string): void;
  className?: string;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  onSelected,
  className,
}: ThemeSelectorProps) => {
  const onThemeSelected = (selection: any) => {
    console.log(selection);
    onSelected('default');
  };

  return (
    <div className={combinedClassNames(bem(), className)}>
      {options.map(option => (
        // eslint-disable-next-line
        <div
          className={bem('selection', option)}
          key={option}
          onClick={onThemeSelected}
        />
      ))}
    </div>
  );
};

export default ThemeSelector;
