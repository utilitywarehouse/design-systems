import React from 'react';
import { Badge, BadgeText } from '@utilitywarehouse/native-ui';
import figma from '@figma/code-connect';

figma.connect(
  Badge,
  'https://www.figma.com/file/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?type=design&node-id=3386-6376&mode=dev',
  {
    links: [
      {
        name: 'Storybook - Docs',
        url: 'https://uw-native-ui.vercel.app/?path=/docs/components-badge--docs',
      },
    ],
    props: {
      text: figma.string('text'),
      strong: figma.boolean('strong'),
      colorScheme: figma.enum('colorScheme', {
        cyan: 'cyan',
        gold: 'gold',
        green: 'green',
        grey: 'grey',
        red: 'red',
      }),
      size: figma.enum('size', {
        'large (default)': 'large',
        small: 'small',
      }),
      borderless: figma.boolean('borderless?'),
    },
    example: ({ text, colorScheme, strong, size, borderless }) => (
      <Badge colorScheme={colorScheme} strong={strong} size={size} borderless={borderless}>
        <BadgeText>{text}</BadgeText>
      </Badge>
    ),
  }
);
