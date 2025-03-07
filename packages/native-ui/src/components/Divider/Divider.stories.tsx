import React from 'react';
import { Divider } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { colors } from '@utilitywarehouse/colour-system';
import { ColorValue } from '../../types';
import { Box } from '../Box';

const meta = {
  title: 'Stories / Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      options: [...Object.keys(colors)],
      control: 'select',
      description: 'Color of the divider',
    },
    space: {
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      control: 'select',
      description: 'Space between the divider',
    },
  },
  args: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ color, space }) => (
    <Box minWidth={200}>
      <Divider color={color ? (`$${color}` as ColorValue) : undefined} space={space} />
    </Box>
  ),
};
