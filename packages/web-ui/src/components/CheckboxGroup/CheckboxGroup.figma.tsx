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
      hintPosition: figma.enum('hint position', {
        bottom: 'bottom',
        top: 'top',
      }),
      content: figma.enum('_content', {
        Checkbox: 'Checkbox',
        'Checkbox Tile': 'CheckboxTile',
      }),
    },
    example: ({ hintPosition, content, ...props }) => (
      <CheckboxGroup {...props} helperTextPosition={hintPosition}>
        {content}
      </CheckboxGroup>
    ),
  }
);
