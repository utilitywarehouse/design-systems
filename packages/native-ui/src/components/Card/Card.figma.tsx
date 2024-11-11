import React from 'react';
import { Card } from './';
import figma from '@figma/code-connect';

figma.connect(
  Card,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=9344-2255&t=mJTJZaLNKo4fj5Wm-4',
  {
    props: {
      variant: figma.enum('variant', {
        dashed: 'dashed',
        elevated: 'elevated',
        outline: 'outline',
        filled: 'filled',
      }),
      padding: figma.enum('padding', {
        large: 'large',
        medium: 'medium',
        small: 'small',
        none: 'none',
      }),
      colorScheme: figma.enum('colorScheme', {
        base: 'base',
        grey: 'grey',
        purple: 'purple',
      }),
      surface: figma.enum('surface', {
        base: 'base',
        purple: 'purple',
      }),
      nested: figma.boolean('nested'),
    },
    example: props => <Card {...props} />,
  }
);
