import React from 'react';
import { VStack } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../Box';

const meta = {
  title: 'Stories / VStack',
  component: VStack,
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
} satisfies Meta<typeof VStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: args => (
    <VStack {...args}>
      <Box w={100} h={100} bg="$cyan300" />
      <Box w={100} h={100} bg="$cyan400" />
      <Box w={100} h={100} bg="$cyan500" />
      <Box w={100} h={100} bg="$cyan600" />
    </VStack>
  ),
};
