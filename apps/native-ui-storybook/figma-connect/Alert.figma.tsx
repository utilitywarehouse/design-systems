import React from 'react';
import { Alert } from '@utilitywarehouse/native-ui';
import figma from '@figma/code-connect';

figma.connect(
  Alert,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=5232-8219&m=dev',
  {
    props: {
      linkText: figma.string('link'),
      showTitle: figma.boolean('Title?', {
        true: figma.string('title'),
        false: undefined,
      }),
      title: figma.string('title'),
      iconButton: figma.boolean('Icon Button?', {
        true: () => console.log('icon button pressed'),
        false: undefined,
      }),
      showLink: figma.boolean('link?', {
        true: () => console.log('link pressed'),
        false: undefined,
      }),
      text: figma.string('text'),
      close: figma.boolean('close', {
        true: () => console.log('close'),
        false: undefined,
      }),
      colorScheme: figma.enum('colorScheme', {
        red: 'red',
        cyan: 'cyan',
        gold: 'gold',
        green: 'green',
      }),
    },
    example: ({ colorScheme, close, iconButton, showLink, showTitle, text, linkText }) => (
      <Alert
        colorScheme={colorScheme}
        title={showTitle}
        text={text}
        onClose={close}
        onPressIconButton={iconButton}
        linkText={linkText}
        onPressLink={showLink}
      />
    ),
  }
);
