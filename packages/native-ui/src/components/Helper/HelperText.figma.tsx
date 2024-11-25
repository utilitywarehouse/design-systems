import React from 'react';
import { Helper } from './';
import figma from '@figma/code-connect';

figma.connect(
  Helper,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=5417-852&m=dev',
  {
    props: {
      text: figma.string('Text'),
      showIcon: figma.boolean('showIcon?'),
      disabled: figma.boolean('disabled'),
      validationStatus: figma.enum('validationStatus', {
        initial: undefined,
        invalid: 'invalid',
        valid: 'valid',
      }),
    },
    example: props => (
      <Helper
        validationStatus={props.validationStatus}
        disabled={props.disabled}
        showIcon={props.showIcon}
        text={props.text}
      />
    ),
  }
);
