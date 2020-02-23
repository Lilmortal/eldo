import React from 'react';

import ButtonGroup from '@eldo/buttongroup';
import { createBem } from '@eldo/bem';
import Button from '@eldo/button';

import './SelectionScreen.scss';

const bem = createBem('eldo-SelectionScreen');

const SelectionScreen = () => (
  <div className={bem()}>
    <ButtonGroup>
      <Button
        value="Test"
        onClick={() => {
          console.log('test');
        }}
      >
        Test
      </Button>
      <Button
        value="Test"
        onClick={() => {
          console.log('test');
        }}
      >
        Test
      </Button>
    </ButtonGroup>
  </div>
);

export default SelectionScreen;
