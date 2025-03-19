import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { VStack } from '../VStack';
import { Box } from '../Box';
import { Text } from '../Text';
import ToggleButtonIcon from './ToggleButtonIcon';
import { MoonSmallIcon, SunSmallIcon } from '@utilitywarehouse/react-native-icons';

const meta = {
  title: 'Stories / ToggleButton',
  component: ToggleButtonGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      options: ['small', 'base'],
      control: 'select',
      description: 'The size of the Toggle Buttons.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the Toggle Buttons.',
    },
  },
  args: {
    size: 'small',
    disabled: false,
  },
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    value: 'day',
  },
  render: ({ value: val, ...args }) => {
    const [value, setValue] = useState(val);

    return (
      <VStack space="lg">
        <Box width="100%" maxWidth={400}>
          <ToggleButtonGroup
            value={value}
            onChange={setValue}
            size={args.size}
            disabled={args.disabled}
          >
            <ToggleButton value="day">Day</ToggleButton>
            <ToggleButton value="week">Week</ToggleButton>
            <ToggleButton value="month">Month</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Text>Active selection: {value}</Text>
      </VStack>
    );
  },
};

export const Disabled: Story = {
  args: {
    value: 'dark',
  },
  render: () => {
    const [value, setValue] = useState('dark');

    return (
      <Box width="100%" maxWidth={200}>
        <ToggleButtonGroup value={value} onChange={setValue} disabled>
          <ToggleButton value="light">Light</ToggleButton>
          <ToggleButton value="dark">Dark</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    );
  },
};

export const Icons: Story = {
  args: {
    value: 'light',
  },
  render: () => {
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
  },
};
