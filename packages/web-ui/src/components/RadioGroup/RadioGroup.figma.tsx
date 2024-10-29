import React from 'react';

import figma from '@figma/code-connect';

import { RadioGroup } from './RadioGroup';

figma.connect(
  RadioGroup,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5277-20684&m=dev',
  {
    props: {
      error: figma.boolean('Error'),
      direction: figma.enum('direction', {
        row: 'row',
        column: 'column',
      }),
      helperTextPosition: figma.enum('Helper Text', {
        individual: undefined,
        global: figma.enum('Hint Position', {
          bottom: 'bottom',
          top: 'top',
        }),
        none: undefined,
      }),
      content: figma.enum('_content', {
        Radio: figma.children('Radio'),
        'Radio Tile': figma.children('Radio Tile'),
      }),
    },
    example: ({ helperTextPosition, content, ...props }) => (
      <RadioGroup helperTextPosition={helperTextPosition} {...props}>
        {content}
      </RadioGroup>
    ),
  }
);
