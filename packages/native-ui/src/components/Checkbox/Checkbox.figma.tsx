import React from 'react';
import { Checkbox } from './';
import figma from '@figma/code-connect';

const props = {
  isDisabled: figma.boolean('isDisabled'),
  invalid: figma.boolean('invalid'),
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
};

figma.connect(
  Checkbox,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=5623-561&m=dev',
  {
    props,
    example: ({ isDisabled, label, helperText, invalidText }) => (
      <Checkbox
        value="some-value"
        onChange={(isChecked: boolean) => console.log(isChecked)}
        disabled={isDisabled}
        label={label.text}
        helperText={helperText.text}
        invalidText={invalidText.text}
        showValidationIcon={invalidText.showIcon}
      />
    ),
  }
);

// TODO: Add variants with helperText when it's implemented
