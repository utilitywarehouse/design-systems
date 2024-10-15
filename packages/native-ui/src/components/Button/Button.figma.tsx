import React from 'react';
import { Button, ButtonIcon, ButtonText } from './';
import figma from '@figma/code-connect';

const props = {
  iconPosition: figma.boolean('Icon Left?', {
    true: 'left',
    false: figma.boolean('Icon Right?', {
      true: 'right',
      false: undefined,
    }),
  }),
  icon: figma.boolean('Icon Right?', {
    true: figma.instance('Icon Right'),
    false: figma.boolean('Icon Left?', {
      true: figma.instance('Icon Left'),
      false: undefined,
    }),
  }),
  iconRight: figma.instance('Icon Right'),
  iconLeft: figma.instance('Icon Left'),
  text: figma.string('Text'),
  colorScheme: figma.enum('colorScheme', {
    cyan: 'cyan',
    green: 'green',
    red: 'red',
  }),
  size: figma.enum('size', {
    'medium - 48 (default)': 'medium',
    'large - 56': 'large',
    'small - 32': 'small',
  }),
  disabled: figma.enum('state', {
    disabled: true,
  }),
  loading: figma.enum('state', {
    loading: true,
  }),
  inverted: figma.boolean('inverted'),
};

// Solid Button

figma.connect(
  Button,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=7249-3682&m=dev',
  {
    props,
    links: [
      {
        name: 'Documentation',
        url: 'https://uw-native-ui.vercel.app/?path=/docs/native-ui-components-button--docs',
      },
    ],
    example: ({ text, inverted, disabled, loading, colorScheme, size, icon, iconPosition }) => (
      <Button
        variant="solid"
        onPress={() => console.log('button pressed')}
        colorScheme={colorScheme}
        size={size}
        inverted={inverted}
        disabled={disabled}
        loading={loading}
        iconPosition={iconPosition}
        icon={icon}
      >
        {text}
      </Button>
    ),
  }
);

figma.connect(
  Button,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=7249-3682&m=dev',
  {
    props,
    links: [
      {
        name: 'Documentation',
        url: 'https://uw-native-ui.vercel.app/?path=/docs/native-ui-components-button--docs',
      },
    ],
    variant: {
      'Icon Right?': true,
      'Icon Left?': true,
    },
    example: ({ text, inverted, disabled, colorScheme, size, iconLeft, iconRight }) => (
      <Button
        variant="solid"
        onPress={() => console.log('button pressed')}
        colorScheme={colorScheme}
        size={size}
        inverted={inverted}
        disabled={disabled}
      >
        <ButtonIcon as={iconLeft} />
        <ButtonText>{text}</ButtonText>
        <ButtonIcon as={iconRight} />
      </Button>
    ),
  }
);

// Outline Button

figma.connect(
  Button,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=7250-1321&m=dev',
  {
    props,
    links: [
      {
        name: 'Documentation',
        url: 'https://uw-native-ui.vercel.app/?path=/docs/native-ui-components-button--docs',
      },
    ],
    example: ({ text, inverted, disabled, loading, colorScheme, size, icon, iconPosition }) => (
      <Button
        variant="outline"
        onPress={() => console.log('button pressed')}
        colorScheme={colorScheme}
        size={size}
        inverted={inverted}
        disabled={disabled}
        loading={loading}
        iconPosition={iconPosition}
        icon={icon}
      >
        {text}
      </Button>
    ),
  }
);

figma.connect(
  Button,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=7249-3682&m=dev',
  {
    props,
    links: [
      {
        name: 'Documentation',
        url: 'https://uw-native-ui.vercel.app/?path=/docs/native-ui-components-button--docs',
      },
    ],
    variant: {
      'Icon Right?': true,
      'Icon Left?': true,
    },
    example: ({ text, inverted, disabled, colorScheme, size, iconLeft, iconRight }) => (
      <Button
        variant="outline"
        onPress={() => console.log('button pressed')}
        colorScheme={colorScheme}
        size={size}
        inverted={inverted}
        disabled={disabled}
      >
        <ButtonIcon as={iconLeft} />
        <ButtonText>{text}</ButtonText>
        <ButtonIcon as={iconRight} />
      </Button>
    ),
  }
);

// Ghost button

figma.connect(
  Button,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=7250-2103&m=dev',
  {
    props,
    links: [
      {
        name: 'Documentation',
        url: 'https://uw-native-ui.vercel.app/?path=/docs/native-ui-components-button--docs',
      },
    ],
    example: ({ text, inverted, disabled, loading, colorScheme, size, icon, iconPosition }) => (
      <Button
        variant="ghost"
        onPress={() => console.log('button pressed')}
        colorScheme={colorScheme}
        size={size}
        inverted={inverted}
        disabled={disabled}
        loading={loading}
        iconPosition={iconPosition}
        icon={icon}
      >
        {text}
      </Button>
    ),
  }
);

figma.connect(
  Button,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=7249-3682&m=dev',
  {
    props,
    links: [
      {
        name: 'Documentation',
        url: 'https://uw-native-ui.vercel.app/?path=/docs/native-ui-components-button--docs',
      },
    ],
    variant: {
      'Icon Right?': true,
      'Icon Left?': true,
    },
    example: ({ text, inverted, disabled, colorScheme, size, iconLeft, iconRight }) => (
      <Button
        variant="ghost"
        onPress={() => console.log('button pressed')}
        colorScheme={colorScheme}
        size={size}
        inverted={inverted}
        disabled={disabled}
      >
        <ButtonIcon as={iconLeft} />
        <ButtonText>{text}</ButtonText>
        <ButtonIcon as={iconRight} />
      </Button>
    ),
  }
);
