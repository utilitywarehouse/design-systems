import React from 'react';
import { Radio, RadioGroup } from './';
import figma from '@figma/code-connect';

const value = 'some-value';
const setValue = (value: string) => console.log(value);

figma.connect(
  Radio,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4461-7535&m=dev',
  {
    props: {
      checked: figma.boolean('checked', { true: 'some-value', false: undefined }),
      disabled: figma.boolean('disabled'),
    },
    example: ({ disabled, checked }) => (
      <RadioGroup value={checked} onChange={setValue}>
        <Radio value={value} disabled={disabled} />
      </RadioGroup>
    ),
  }
);
