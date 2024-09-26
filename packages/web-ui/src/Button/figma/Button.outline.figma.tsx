import React from 'react';
import figma from '@figma/code-connect';
import { Button } from '../Button';

figma.connect(
  Button,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5749-27901&m=dev',
  {
    props: {
      iconRight: figma.instance('Icon Right'),
      iconLeft: figma.boolean('Icon Left?'),
      children: figma.string('Text'),
      size: figma.enum('size', {
        'medium - 48': 'medium',
        'small - 32': 'small',
      }),
      colorScheme: figma.enum('colorScheme', {
        cyan: 'cyan',
        red: 'red',
        green: 'green',
        gold: 'gold',
        grey: 'grey',
      }),
      inverted: figma.boolean('Inverted'),
    },
    example: ({ iconLeft, iconRight, children, colorScheme, inverted }) => (
      <Button variant="outline" colorScheme={colorScheme} inverted={inverted}>
        {iconLeft}
        {children}
        {iconRight}
      </Button>
    ),
  }
);
