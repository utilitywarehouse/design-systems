import React from 'react';

import figma from '@figma/code-connect';

import { CheckboxTile } from './CheckboxTile';

figma.connect(
  CheckboxTile,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5300-21487&m=dev',
  {
    props: {
      label: figma.nestedProps('Label', {
        text: figma.string('Label Text'),
      }),
      helperText: figma.nestedProps('Helper Text', {
        text: figma.string('Text'),
      }),
      disabled: figma.enum('state', {
        disabled: true,
      }),
    },
    example: ({ label, helperText, disabled }) => (
      <CheckboxTile label={label.text} helperText={helperText.text} disabled={disabled} />
    ),
  }
);
