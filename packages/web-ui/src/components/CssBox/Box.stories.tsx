import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Web UI / Components / CssBox',
  component: Box,
  argTypes: {
    children: { control: { type: 'text' } },
    padding: { control: { type: 'text' } },
  },
  args: {
    children: 'CssBox',
    padding: '8px',
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Workshop: Story = {
  render: args => <Box {...args} padding={{ mobile: '4px', tablet: '8px', desktop: '16px' }} />,
};
