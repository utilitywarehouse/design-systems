import React from 'react';
import { Label } from './';
import figma from '@figma/code-connect';

figma.connect(
  Label,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=5623-342&m=dev',
  {
    props: {
      labelText: figma.string('Label Text'),
      disabled: figma.boolean('disabled'),
      nested: figma.boolean('nested'),
    },
    example: props => (
      <Label disabled={props.disabled} nested={props.nested}>
        {props.labelText}
      </Label>
    ),
  }
);
