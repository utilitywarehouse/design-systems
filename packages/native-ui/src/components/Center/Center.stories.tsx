import React from 'react';
import { Center } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text';
import { colors } from '@utilitywarehouse/colour-system';

const meta = {
  title: 'Stories / Center',
  component: Center,
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
    children: 'I am Centered',
    bg: '$cyan500',
    w: 300,
    h: 200,
    p: '$4',
  },
} satisfies Meta<typeof Center>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ children, ...args }) => (
    <Center {...args}>
      <Text color="$white">{children}</Text>
    </Center>
  ),
};
