import React from 'react';

import figma from '@figma/code-connect';

import { Checkbox } from './Checkbox';

figma.connect(
  Checkbox,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5300-21339&m=dev',
  {
    props: {
      disabled: figma.boolean('disabled'),
      label: figma.nestedProps('Label', {
        text: figma.string('Label Text'),
      }),
      helperText: figma.nestedProps('Helper Text', {
        text: figma.string('Text'),
      }),
    },
    example: ({ label, helperText, disabled }) => (
      <Checkbox label={label.text} helperText={helperText.text} disabled={disabled} />
    ),
  }
);
