import React from 'react';

import figma from '@figma/code-connect';

import { Divider } from './Divider';

figma.connect(
  Divider,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=8185-16031&m=dev',
  {
    props: {
      orientation: figma.enum('orientation', {
        horizontal: 'horizontal',
        vertical: 'vertical',
      }),
    },
    example: props => <Divider {...props} />,
  }
);
