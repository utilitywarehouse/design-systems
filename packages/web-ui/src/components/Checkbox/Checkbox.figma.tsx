import React from 'react';

import figma from '@figma/code-connect';

import { Checkbox } from './Checkbox';

figma.connect(
  Checkbox,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5300-21339&m=dev',
  {
    example: () => (
      <Checkbox
        helperText="Helper Text"
        label="Label"
        value="1"
        checked={false}
        onCheckedChange={(checked: boolean) => console.log(checked)}
      />
    ),
  }
);
