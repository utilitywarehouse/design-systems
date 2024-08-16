import React from 'react';
import { ListHeading } from '@utilitywarehouse/native-ui';
import figma from '@figma/code-connect';

figma.connect(
  ListHeading,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4763-8266&t=q4qCzh74a2av1MqM-4',
  {
    props: {
      supportingText: figma.string('Supporting text'),
      text: figma.string('heading'),
    },
    example: ({ supportingText, text }) => (
      <ListHeading text={text} supportingText={supportingText} />
    ),
  }
);
