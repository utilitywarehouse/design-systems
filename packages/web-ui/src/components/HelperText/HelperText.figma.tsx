import React from 'react';

import figma from '@figma/code-connect';

import { HelperText } from './HelperText';

figma.connect(
  HelperText,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5275-23751&m=dev',
  {
    props: {
      showIcon: figma.boolean('showIcon?'),
      children: figma.string('Text'),
      disabled: figma.boolean('disabled?'),
      validationStatus: figma.enum('validationStatus', {
        initial: undefined,
        invalid: 'invalid',
        valid: 'valid',
      }),
    },
    example: ({ children, ...props }) => <HelperText {...props}>{children}</HelperText>,
  }
);
