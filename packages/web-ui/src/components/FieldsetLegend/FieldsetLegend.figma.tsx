import React from 'react';

import figma from '@figma/code-connect';

import { FieldsetLegend } from './FieldsetLegend';

figma.connect(
  FieldsetLegend,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5275-23746&m=dev',
  {
    props: {
      children: figma.string('Label Text'),
      disabled: figma.boolean('disabled'),
    },
    example: ({ children, ...props }) => <FieldsetLegend {...props}>{children}</FieldsetLegend>,
  }
);
