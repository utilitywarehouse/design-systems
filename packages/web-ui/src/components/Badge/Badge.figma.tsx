import React from 'react';

import figma from '@figma/code-connect';

import { Badge } from './Badge';

figma.connect(
  Badge,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=7409-776&m=dev',
  {
    props: {
      iconLeft: figma.instance('Icon left'),
      text: figma.string('Text'),
      variant: figma.enum('variant', {
        'soft (default)': 'soft',
        strong: 'strong',
        outline: 'outline',
      }),
      colorScheme: figma.enum('colorScheme', {
        cyan: 'cyan',
        gold: 'gold',
        green: 'green',
        grey: 'grey',
        red: 'red',
        'cyan/inverted': 'cyan',
        'gold/inverted': 'gold',
        'green/inverted': 'green',
        'grey/inverted': 'grey',
        'red/inverted': 'red',
      }),
      inverted: figma.enum('colorScheme', {
        'cyan/inverted': true,
        'gold/inverted': true,
        'green/inverted': true,
        'grey/inverted': true,
        'red/inverted': true,
      }),
      compact: figma.boolean('compact'),
      bottomRadiusZero: figma.enum('bottomRadius', {
        '0px': true,
      }),
    },
    example: ({ text, iconLeft, ...props }) => (
      <Badge {...props}>
        {iconLeft}
        {text}
      </Badge>
    ),
  }
);
