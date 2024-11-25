import React from 'react';

import figma from '@figma/code-connect';

import { Label } from './Label';

figma.connect(
  Label,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5275-23737&m=dev',
  {
    props: {
      children: figma.string('Label Text'),
      disabled: figma.boolean('disabled'),
      nested: figma.boolean('nested'),
    },
    example: ({ children, ...props }) => <Label {...props}>{children}</Label>,
  }
);
