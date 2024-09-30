import React from 'react';
import figma from '@figma/code-connect';
import { Link } from './Link';

figma.connect(
  Link,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5803-26758&m=dev',
  {
    props: {
      iconRight: figma.instance('Icon Right'),
      iconLeft: figma.instance('Icon Left'),
      children: figma.string('Text'),
      size: figma.enum('size', {
        'large - 24': 'large',
        'small - 16': 'small',
      }),
      inverted: figma.boolean('inverted'),
    },
    example: ({ size, children, inverted, iconLeft, iconRight }) => (
      <Link size={size} inverted={inverted}>
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    ),
  }
);
