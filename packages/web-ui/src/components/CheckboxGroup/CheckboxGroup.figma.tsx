import React from 'react';

import figma from '@figma/code-connect';

import { CheckboxGroup } from './CheckboxGroup';

figma.connect(
  CheckboxGroup,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5300-21350&m=dev',
  {
    props: {
      direction: figma.enum('direction', {
        row: 'row',
        column: 'column',
      }),
      error: figma.boolean('error'),
      helperTextPosition: figma.enum('helper text', {
        Individual: undefined,
        global: figma.enum('hint position', {
          bottom: 'bottom',
          top: 'top',
        }),
        none: undefined,
      }),
      content: figma.enum('_content', {
        Checkbox: figma.children('Checkbox'),
        'Checkbox Tile': figma.children('Checkbox Tile'),
      }),
    },
    example: ({ helperTextPosition, content, ...props }) => (
      <CheckboxGroup helperTextPosition={helperTextPosition} {...props}>
        {content}
      </CheckboxGroup>
    ),
  }
);
