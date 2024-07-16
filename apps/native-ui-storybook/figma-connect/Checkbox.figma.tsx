import React from 'react';
import { Checkbox, CheckboxIndicator, CheckboxLabel } from '@utilitywarehouse/native-ui';
import figma from '@figma/code-connect';

const props = {
  helperText: figma.boolean('Helper Text?'),
  isDisabled: figma.boolean('isDisabled'),
  invalid: figma.boolean('invalid'),
};

figma.connect(
  Checkbox,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=5623-561&m=dev',
  {
    props,
    imports: [
      'import { Checkbox, CheckboxIndicator, CheckboxLabel } from "@utilitywarehouse/native-ui";',
    ],
    example: ({ isDisabled }) => (
      <Checkbox
        value="someValue"
        onChange={(isChecked: boolean) => console.log(isChecked)}
        isDisabled={isDisabled}
      >
        <CheckboxIndicator />
        <CheckboxLabel>Label</CheckboxLabel>
      </Checkbox>
    ),
  }
);

// TODO: Add variants with helperText when it's implemented
