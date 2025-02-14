import React from 'react';
import { Skeleton } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { colors } from '@utilitywarehouse/colour-system';

const meta = {
  title: 'Stories / Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: {
      options: [...Object.keys(colors).map(color => `$${color}`)],
      control: 'select',
      description: 'Background color of the skeleton. Use the color name from the theme.',
    },
    width: { control: 'number' },
    height: { control: 'number' },
    borderRadius: { control: 'number' },
  },
  args: {
    backgroundColor: '$grey75',
    width: 200,
    height: 16,
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: args => <Skeleton {...args} />,
};
