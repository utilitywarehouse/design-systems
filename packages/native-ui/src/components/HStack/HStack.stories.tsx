import React from 'react';
import { HStack } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../Box';

const meta = {
  title: 'Stories / HStack',
  component: HStack,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    space: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    reversed: {
      control: 'boolean',
    },
  },
  args: {
    space: 'md',
    reversed: false,
  },
} satisfies Meta<typeof HStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: args => (
    <HStack {...args}>
      <Box w={100} h={100} bg="$cyan300" />
      <Box w={100} h={100} bg="$cyan400" />
      <Box w={100} h={100} bg="$cyan500" />
      <Box w={100} h={100} bg="$cyan600" />
    </HStack>
  ),
};
