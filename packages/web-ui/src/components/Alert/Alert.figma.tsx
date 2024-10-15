import React from 'react';

import figma from '@figma/code-connect';

import { Alert } from './Alert';

figma.connect(
  Alert,
  'https://www.figma.com/design/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI?node-id=5448-21854&m=dev',
  {
    // https://github.com/figma/code-connect/issues/12
    links: [
      {
        name: 'Documentation',
        url: 'https://uw-web-ui.vercel.app/?path=/docs/web-ui-components-alert--documentation',
      },
    ],
    props: {
      title: figma.string('title'),
      link: figma.string('link'),
      text: figma.string('text'),
      close: figma.boolean('close', {
        true: () => console.log('close'),
        false: undefined,
      }),
      colorScheme: figma.enum('colorScheme', {
        red: 'red',
        gold: 'gold',
        cyan: 'cyan',
        green: 'green',
      }),
      direction: figma.enum('direction', {
        column: 'column',
        row: 'row',
      }),
    },
    example: ({ title, text, link, close, colorScheme, direction }) => (
      <Alert
        title={title}
        text={text}
        linkText={link}
        onClose={close}
        colorScheme={colorScheme}
        direction={direction}
      />
    ),
  }
);
