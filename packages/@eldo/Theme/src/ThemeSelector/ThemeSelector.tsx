import React from 'react';

import { createBem, combinedClassNames } from '../../../bem';
import { Selection, selectionList } from '../Theme';

import './ThemeSelector.scss';

const bem = createBem('eldo-ThemeSelector');

export interface ThemeSelectorProps {
  selected: Selection;
  expanded?: boolean;
  onSelected(selection: Selection): void;
  className?: string;
}

const isSelection = (selection: string): selection is Selection => {
  return selectionList.includes(selection as Selection);
};

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  selected,
  expanded = false,
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

  // console.log(expanded);
  // TODO: aria-hidden them as keyboard users don't need this.
  return (
    <div
      className={combinedClassNames(
        bem('', expanded ? 'expanded' : ''),
        className
      )}
    >
      <div className={bem('themeListContainer')}>
        <div className={bem('themeList')}>
          {selectionList.map(option => (
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
      </div>
      <div className={bem('selection', [selected])} />
    </div>
  );
};

export default ThemeSelector;
