import React from 'react';
import { RadioGroup, Radio, RadioIndicator } from '@utilitywarehouse/native-ui';
import figma from '@figma/code-connect';

const value = 'someValue';
const setValue = (value: string) => console.log(value);

figma.connect(
  RadioIndicator,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4461-7535&m=dev',
  {
    props: {
      checked: figma.boolean('checked'),
      disabled: figma.boolean('disabled'),
    },
    imports: ['import { RadioGroup, Radio, RadioIndicator } from "@utilitywarehouse/native-ui";'],
    example: ({ disabled }) => (
      <RadioGroup value={value} onChange={setValue}>
        <Radio value="someValue" isDisabled={disabled}>
          <RadioIndicator />
        </Radio>
      </RadioGroup>
    ),
  }
);
