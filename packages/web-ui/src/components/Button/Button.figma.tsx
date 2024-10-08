import React from 'react';

import figma from '@figma/code-connect';

import { Button } from '../Button';

figma.connect(
  Button,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5771-26816&m=dev',
  {
    props: {
      iconLeft: figma.instance('Icon Left'),
      iconRight: figma.instance('Icon Right'),
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
      <Button variant="ghost" colorScheme={colorScheme} inverted={inverted}>
        {iconLeft}
        {children}
        {iconRight}
      </Button>
    ),
  }
);

figma.connect(
  Button,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5749-27901&m=dev',
  {
    props: {
      iconRight: figma.instance('Icon Right'),
      iconLeft: figma.instance('Icon Left'),
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

figma.connect(
  Button,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5740-27360&m=dev',
  {
    props: {
      iconRight: figma.instance('Icon Right'),
      iconLeft: figma.instance('Icon Left'),
      children: figma.string('Text'),
      size: figma.enum('size', {
        'medium - 48': 'medium',
        'small - 32': 'small',
      }),
      colorScheme: figma.enum('colorScheme', {
        cyan: 'cyan',
        red: 'red',
        green: 'green',
      }),
      inverted: figma.boolean('Inverted'),
    },
    example: ({ iconLeft, iconRight, children, colorScheme, inverted }) => (
      <Button variant="solid" colorScheme={colorScheme} inverted={inverted}>
        {iconLeft}
        {children}
        {iconRight}
      </Button>
    ),
  }
);
