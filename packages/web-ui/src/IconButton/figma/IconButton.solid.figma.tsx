import React from 'react';
import figma from '@figma/code-connect';
import { IconButton } from '../IconButton';

figma.connect(
  IconButton,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=6105-26516&m=dev',
  {
    props: {
      icon: figma.instance('Icon'),
      size: figma.enum('size', {
        'medium - 48': 'medium',
        'small - 32': 'small',
        'x-small - 24': 'xsmall',
      }),
      colorScheme: figma.enum('colorScheme', {
        cyan: 'cyan',
        red: 'red',
        green: 'green',
      }),
      inverted: figma.boolean('Inverted'),
    },
    example: ({ icon, size, colorScheme }) => (
      <IconButton label="Please add a label" variant="solid" size={size} colorScheme={colorScheme}>
        {icon}
      </IconButton>
    ),
  }
);
