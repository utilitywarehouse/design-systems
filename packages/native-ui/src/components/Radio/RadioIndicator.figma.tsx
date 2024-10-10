import React from 'react';
import { RadioIndicator } from './';
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
    example: ({ disabled }) => <RadioIndicator />,
  }
);
