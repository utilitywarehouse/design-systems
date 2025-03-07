import React from 'react';
import { Box } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text';
import { colors } from '@utilitywarehouse/colour-system';

const meta = {
  title: 'Stories / Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    bg: {
      options: [...Object.keys(colors).map(color => `$${color}`)],
      control: 'select',
      description: 'Background color of the box. Use the color name from the theme.',
    },
    w: { control: 'number' },
    h: { control: 'number' },
  },
  args: {
    children: 'This is a box',
    bg: '$red500',
    w: 100,
    h: 100,
    p: '$4',
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ children, ...args }) => (
    <Box {...args}>
      <Text color="$white">{children}</Text>
    </Box>
  ),
};
