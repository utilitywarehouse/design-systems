import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import {
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Text,
  VStack,
  ToggleButtonIcon,
} from '@utilitywarehouse/native-ui';
import { MoonSmallIcon, SunSmallIcon } from '@utilitywarehouse/react-native-icons';

export default {
  title: 'Native UI / Components / ToggleButton',
};

export const Playground: StoryFn = ({ size, disabled }) => {
  const [value, setValue] = useState('day');

  return (
    <VStack space="lg">
      <Box width="100%" maxWidth={400}>
        <ToggleButtonGroup value={value} onChange={setValue} size={size} disabled={disabled}>
          <ToggleButton value="day">Day</ToggleButton>
          <ToggleButton value="week">Week</ToggleButton>
          <ToggleButton value="month">Month</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Text>Active selection: {value}</Text>
    </VStack>
  );
};

Playground.argTypes = {
  size: {
    options: ['small', 'base'],
    control: 'select',
    description: 'The size of the Toggle Buttons.',
  },
  disabled: {
    control: 'boolean',
    description: 'Disable the Toggle Buttons.',
  },
};

Playground.args = {
  size: 'small',
  disabled: false,
};

export const Disabled: StoryFn = () => {
  const [value, setValue] = useState('dark');

  return (
    <Box width="100%" maxWidth={200}>
      <ToggleButtonGroup value={value} onChange={setValue} disabled>
        <ToggleButton value="light">Light</ToggleButton>
        <ToggleButton value="dark">Dark</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export const Icons: StoryFn = () => {
  const [value, setValue] = useState('light');

  return (
    <Box width="100%" maxWidth={300}>
      <ToggleButtonGroup value={value} onChange={setValue}>
        <ToggleButton value="light">
          <ToggleButtonIcon as={SunSmallIcon} />
        </ToggleButton>
        <ToggleButton value="dark">
          <ToggleButtonIcon as={MoonSmallIcon} />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
