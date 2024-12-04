import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Box> = {
  title: 'Stories / Box',
  component: Box,
  parameters: { layout: 'centered' },
  argTypes: {
    children: { control: { type: 'text' } },
    as: { options: ['div', 'span'], control: { type: 'radio' } },
    padding: { control: { type: 'text' } },
    paddingInline: { control: { type: 'text' } },
    paddingBlock: { control: { type: 'text' } },
    paddingTop: { control: { type: 'text' } },
    paddingRight: { control: { type: 'text' } },
    paddingBottom: { control: { type: 'text' } },
    paddingLeft: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    minWidth: { control: { type: 'text' } },
    maxWidth: { control: { type: 'text' } },
    height: { control: { type: 'text' } },
    minHeight: { control: { type: 'text' } },
    maxHeight: { control: { type: 'text' } },
    color: { control: { type: 'text' } },
    backgroundColor: { control: { type: 'text' } },
  },
  args: {
    children: 'Box',
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof Box>;

export const Workshop: Story = {
  // render: args => <Box {...args} padding="100px" />,
  render: args => (
    <Box {...args} padding={{ mobile: '50', tablet: '100', desktop: '200' }} paddingTop="24px" />
  ),
};

export const ResponsivePadding: Story = {
  args: {
    children: 'Responsive padding',
    padding: {
      mobile: '4px',
      tablet: '8px',
      desktop: '16px',
      wide: '32px',
    },
  },
};
