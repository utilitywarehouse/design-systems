import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import { paddingTokens } from '../../props/padding.props';
import { Heading } from '../Heading/Heading';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Box> = {
  title: 'Stories / Box',
  component: Box,
  parameters: { layout: 'centered' },
  argTypes: {
    children: { control: { type: 'text' } },
    as: { options: ['div', 'span'], control: { type: 'radio' } },
    padding: { options: paddingTokens, control: { type: 'select' } },
    paddingInline: { options: paddingTokens, control: { type: 'select' } },
    paddingBlock: { options: paddingTokens, control: { type: 'select' } },
    paddingTop: { options: paddingTokens, control: { type: 'select' } },
    paddingRight: { options: paddingTokens, control: { type: 'select' } },
    paddingBottom: { options: paddingTokens, control: { type: 'select' } },
    paddingLeft: { options: paddingTokens, control: { type: 'select' } },
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
    style: { border: '1px solid rebeccapurple' },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof Box>;

export const Workshop: Story = {};

export const ResponsiveProps: Story = {
  args: {
    children: 'Responsive props',
    padding: {
      mobile: '4px',
      tablet: '200',
      desktop: '16px',
      wide: '0',
    },
    width: {
      mobile: '100px',
      tablet: '200px',
      desktop: '300px',
      wide: '400px',
    },
  },
};
