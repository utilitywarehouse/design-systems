import React from 'react';
import { CheckboxIndicator } from './';
import figma from '@figma/code-connect';

figma.connect(
  CheckboxIndicator,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4454-3759&m=dev',
  {
    props: {
      checked: figma.boolean('checked'),
      isDisabled: figma.boolean('isDisabled'),
    },
    example: () => <CheckboxIndicator />,
  }
);
