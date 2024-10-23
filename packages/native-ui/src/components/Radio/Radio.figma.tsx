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
      disabled: figma.boolean('disabled'),
      label: figma.nestedProps('Label', {
        text: figma.string('Label Text'),
      }),
      helperText: figma.nestedProps('Helper Text', {
        text: figma.string('Text'),
      }),
      invalidText: figma.boolean('invalid', {
        true: figma.nestedProps('Helper Text', {
          text: figma.string('Text'),
          showIcon: figma.boolean('showIcon?'),
        }),
        false: {
          text: undefined,
          showIcon: undefined,
        },
      }),
    },
    example: ({ disabled, label, helperText, invalidText }) => (
      <RadioGroup value={value} onChange={setValue}>
        <Radio
          value="someValue"
          disabled={disabled}
          label={label.text}
          helperText={helperText.text}
          invalidText={invalidText.text}
          showValidationIcon={invalidText.showIcon}
        />
      </RadioGroup>
    ),
  }
);

// TODO: Add variants with helperText when it's implemented
