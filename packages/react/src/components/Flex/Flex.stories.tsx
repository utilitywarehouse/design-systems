import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import React from 'react';
import { Box } from '../Box/Box';
import { paddingTokens } from '../../props/padding.props';
import { gapTokens } from '../../props/gap.props';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Flex> = {
  title: 'Stories / Flex',
  component: Flex,
  parameters: { layout: 'centered' },
  argTypes: {
    children: { control: { type: 'text' } },
    as: { options: ['div', 'span'], control: { type: 'radio' } },
    display: { options: ['none', 'flex', 'inline-flex'], control: { type: 'radio' } },
    padding: { options: paddingTokens, control: { type: 'select' } },
    paddingInline: { options: paddingTokens, control: { type: 'select' } },
    paddingBlock: { options: paddingTokens, control: { type: 'select' } },
    paddingTop: { options: paddingTokens, control: { type: 'select' } },
    paddingRight: { options: paddingTokens, control: { type: 'select' } },
    paddingBottom: { options: paddingTokens, control: { type: 'select' } },
    paddingLeft: { options: paddingTokens, control: { type: 'select' } },
    gap: { options: gapTokens, control: { type: 'select' } },
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
    children: 'Flex',
    style: { border: '1px solid rebeccapurple' },
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
      mobile: '50',
      tablet: '100',
      desktop: '200',
      wide: '400',
    },
    children: '',
    style: { border: 'none' },
    direction: 'column',
  },
};
