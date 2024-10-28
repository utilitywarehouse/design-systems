import React from 'react';

import figma from '@figma/code-connect';

import { RadioTile } from './RadioTile';

figma.connect(
  RadioTile,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5277-20821&m=dev',
  {
    props: {
      label: figma.nestedProps('Label', {
        text: figma.string('Label Text'),
      }),
      helperText: figma.nestedProps('Helper Text?', {
        text: figma.string('Text'),
      }),
      disabled: figma.enum('state', {
        disabled: true,
      }),
    },
    example: ({ label, helperText, disabled }) => (
      <RadioTile
        value="value"
        label={label.text}
        helperText={helperText.text}
        disabled={disabled}
      />
    ),
  }
);
