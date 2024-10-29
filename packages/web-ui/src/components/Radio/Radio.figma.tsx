import React from 'react';

import figma from '@figma/code-connect';

import { Radio } from './Radio';

figma.connect(
  Radio,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5277-20673&m=dev',
  {
    props: {
      disabled: figma.boolean('disabled'),
      label: figma.nestedProps('Label', {
        text: figma.string('Label Text'),
      }),
      helperText: figma.nestedProps('Helper Text?', {
        text: figma.string('Text'),
      }),
    },
    example: ({ label, helperText, disabled }) => (
      <Radio value="value" label={label.text} helperText={helperText.text} disabled={disabled} />
    ),
  }
);
