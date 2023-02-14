import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box, { BoxProps } from '../Box';
import Heading from './Heading';
import { backgroundColors } from '../types';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    background: {
      options: backgroundColors,
      control: { type: 'radio' },
    },
    variant: {
      options: ['displayHeading', 'h1', 'h2', 'h3', 'h4'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<{ background: BoxProps['background'] } & typeof Heading>;

export const Workshop: Story = {
  render: ({ background, ...args }) => {
    return (
      <Box background={background}>
        <Heading {...args} />
      </Box>
    );
  },
  args: {
    children: 'hamburgefons',
    variant: 'h2',
    component: 'h2',
    color: 'primary',
  },
};
