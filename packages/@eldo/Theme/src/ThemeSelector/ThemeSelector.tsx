import React from 'react';

import { createBem, combinedClassNames } from '../../../bem';
import { Selection } from '../Theme';

import './ThemeSelector.scss';

const bem = createBem('eldo-ThemeSelector');

// TODO: Can you read postCSS variables in JS?
const options = ['default', 'dark'];

export interface ThemeSelectorProps {
  selected: Selection;
  onSelected(selection: Selection): void;
  className?: string;
}

const isSelection = (selection: string): selection is Selection => {
  return ['default', 'dark'].includes(selection);
};

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  selected,
  onSelected,
  className,
}: ThemeSelectorProps) => {
  const onThemeSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isSelection(e.target.value)) {
      onSelected(e.target.value);
    } else {
      throw new Error('invalid selection value');
    }
  };

  // TODO: aria-hidden them as keyboard users don't need this.
  return (
    <div className={combinedClassNames(bem(), className)}>
      {options.map(option => (
        <React.Fragment key={option}>
          <label
            htmlFor={option}
            className={bem('selection', [
              option,
              selected === option ? 'selected' : '',
            ])}
          >
            <input
              type="radio"
              name="theme"
              id={option}
              value={option}
              onChange={onThemeSelected}
            />
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ThemeSelector;
