import React from 'react';
import { Checkbox } from './';
import figma from '@figma/code-connect';

const value = 'some-value';
const setValue = (isChecked: boolean) => console.log(isChecked);

figma.connect(
  Checkbox,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4454-3759&m=dev',
  {
    props: {
      checked: figma.boolean('checked'),
      disabled: figma.boolean('disabled'),
    },
    example: ({ disabled, checked }) => (
      <Checkbox value={value} onChange={setValue} disabled={disabled} checked={checked} />
    ),
  }
);
