import React from 'react';
import figma from '@figma/code-connect';
import { Radio, RadioGroup, RadioIndicator, RadioLabel } from '@utilitywarehouse/native-ui';

const value = 'someValue';
const setValue = (value: string) => console.log(value);

figma.connect(
  Radio,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=5626-1463&m=dev',
  {
    props: {
      helperText: figma.boolean('Helper Text?'),
      disabled: figma.boolean('disabled'),
      invalid: figma.boolean('invalid'),
    },
    imports: [
      'import { RadioGroup, Radio, RadioIndicator, RadioLabel } from "@utilitywarehouse/native-ui";',
    ],
    example: ({ disabled }) => (
      <RadioGroup value={value} onChange={setValue}>
        <Radio value="someValue" isDisabled={disabled}>
          <RadioIndicator />
          <RadioLabel>Label</RadioLabel>
        </Radio>
      </RadioGroup>
    ),
  }
);

// TODO: Add variants with helperText when it's implemented
