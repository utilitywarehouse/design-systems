import React from 'react';
import { IconButton } from '@utilitywarehouse/native-ui';
import figma from '@figma/code-connect';

const props = {
  iconxsmall: figma.instance('icon x-small'),
  icon: figma.instance('icon'),
  colorScheme: figma.enum('colorScheme', {
    cyan: 'cyan',
    red: 'red',
    green: 'green',
    gold: 'gold',
    grey: 'grey',
  }),
  size: figma.enum('size', {
    'medium - 48': 'medium',
    'small - 32': 'small',
    'x-small - 24': 'x-small',
  }),
  disabled: figma.enum('state', {
    disabled: true,
  }),
  loading: figma.enum('state', {
    loading: true,
  }),
  inverted: figma.boolean('inverted'),
};

const imports = [
  'import { IconButton } from "@utilitywarehouse/native-ui";',
  'import { YourIcon } from "@utilitywarehouse/react-native-icons";',
];

// Solid Button
figma.connect(
  IconButton,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=6678-6454&m=dev',
  {
    props,
    imports,
    example: ({ inverted, icon, colorScheme, size, disabled, loading }) => (
      <IconButton
        variant="solid"
        colorScheme={colorScheme}
        size={size}
        onPress={() => console.log('buttonPressed')}
        disabled={disabled}
        icon={icon}
        loading={loading}
        inverted={inverted}
      />
    ),
  }
);

figma.connect(
  IconButton,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=6678-6454&m=dev',
  {
    props,
    imports,
    variant: {
      size: 'x-small - 24',
    },
    example: ({ inverted, iconxsmall, colorScheme, size, disabled, loading }) => (
      <IconButton
        variant="solid"
        colorScheme={colorScheme}
        size={size}
        onPress={() => console.log('buttonPressed')}
        disabled={disabled}
        icon={iconxsmall}
        loading={loading}
        inverted={inverted}
      />
    ),
  }
);

// Outline Button

figma.connect(
  IconButton,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=6679-7713&m=dev',
  {
    props,
    imports,
    example: ({ inverted, icon, colorScheme, size, disabled, loading }) => (
      <IconButton
        variant="outline"
        colorScheme={colorScheme}
        size={size}
        onPress={() => console.log('buttonPressed')}
        disabled={disabled}
        icon={icon}
        loading={loading}
        inverted={inverted}
      />
    ),
  }
);

figma.connect(
  IconButton,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=6679-7713&m=dev',
  {
    props,
    imports,
    variant: {
      size: 'x-small - 24',
    },
    example: ({ inverted, iconxsmall, colorScheme, size, disabled, loading }) => (
      <IconButton
        variant="outline"
        colorScheme={colorScheme}
        size={size}
        onPress={() => console.log('buttonPressed')}
        disabled={disabled}
        icon={iconxsmall}
        loading={loading}
        inverted={inverted}
      />
    ),
  }
);

// Ghost Button
figma.connect(
  IconButton,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=6682-8623&m=dev',
  {
    props,
    imports,
    example: ({ inverted, icon, colorScheme, size, disabled, loading }) => (
      <IconButton
        variant="ghost"
        colorScheme={colorScheme}
        size={size}
        onPress={() => console.log('buttonPressed')}
        disabled={disabled}
        icon={icon}
        loading={loading}
        inverted={inverted}
      />
    ),
  }
);

figma.connect(
  IconButton,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=6682-8623&m=dev',
  {
    props,
    imports,
    variant: {
      size: 'x-small - 24',
    },
    example: ({ inverted, iconxsmall, colorScheme, size, disabled, loading }) => (
      <IconButton
        variant="ghost"
        colorScheme={colorScheme}
        size={size}
        onPress={() => console.log('buttonPressed')}
        disabled={disabled}
        icon={iconxsmall}
        loading={loading}
        inverted={inverted}
      />
    ),
  }
);
