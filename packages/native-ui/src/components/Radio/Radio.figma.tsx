import React from 'react';
import figma from '@figma/code-connect';
import { Radio, RadioGroup } from './';

const value = 'some-value';
const setValue = (value: string) => console.log(value);

figma.connect(
  Radio,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=5626-1463&m=dev',
  {
    props: {
      helperText: figma.boolean('Helper Text?'),
      disabled: figma.boolean('disabled'),
      invalid: figma.boolean('invalid'),
      label: figma.nestedProps('Label', {
        text: figma.string('Label Text'),
      }),
    },
    example: ({ disabled, label }) => (
      <RadioGroup value={value} onChange={setValue}>
        <Radio value="someValue" disabled={disabled} label={label.text} />
      </RadioGroup>
    ),
  }
);

// TODO: Add variants with helperText when it's implemented
