import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import React from 'react';
import { Box } from '../Box/Box';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Flex> = {
  title: 'Stories / Flex',
  component: Flex,
  parameters: { layout: 'centered' },
  argTypes: {
    children: { control: { type: 'text' } },
    as: { options: ['div', 'span'], control: { type: 'radio' } },
    display: { options: ['none', 'flex', 'inline-flex'], control: { type: 'radio' } },
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
    children: 'Pollen Flex',
    display: 'flex',
    direction: 'column',
    backgroundColor: 'transparent',
    color: 'inherit',
    padding: '32px',
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof Flex>;

export const Workshop: Story = {};

export const ResponsiveGap: Story = {
  render: args => (
    <Flex {...args}>
      <Box className="uwp-sb-Placeholder" width="400px" height="100px" />
      <Box className="uwp-sb-Placeholder" width="400px" height="100px" />
      <Box className="uwp-sb-Placeholder" width="400px" height="100px" />
    </Flex>
  ),
  args: {
    gap: {
      mobile: '4px',
      tablet: '8px',
      desktop: '16px',
      wide: '32px',
    },
  },
};
