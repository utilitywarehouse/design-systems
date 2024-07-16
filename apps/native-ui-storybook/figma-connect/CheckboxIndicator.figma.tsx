import React from 'react';
import { CheckboxIndicator, Checkbox } from '@utilitywarehouse/native-ui';
import figma from '@figma/code-connect';

figma.connect(
  CheckboxIndicator,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4454-3759&m=dev',
  {
    props: {
      checked: figma.boolean('checked'),
      isDisabled: figma.boolean('isDisabled'),
    },
    imports: ['import { Checkbox, CheckboxIndicator } from "@utilitywarehouse/native-ui";'],
    example: ({ checked, isDisabled }) => (
      <Checkbox
        value="some value"
        isChecked={checked}
        isDisabled={isDisabled}
        onChange={() => console.log('checkbox chacked')}
      >
        <CheckboxIndicator />
      </Checkbox>
    ),
  }
);
