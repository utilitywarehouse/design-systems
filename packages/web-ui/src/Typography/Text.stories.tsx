import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box, { BoxProps } from '../Box';
import Text from './Text';
import { backgroundColors } from '../types';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    background: {
      options: backgroundColors,
      control: { type: 'radio' },
    },
    variant: {
      options: ['body', 'subtitle', 'caption', 'legalNote'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<{ background: BoxProps['background'] } & typeof Text>;

export const Workshop: Story = {
  render: ({ background, ...args }) => {
    return (
      <Box background={background}>
        <Text {...args} />
      </Box>
    );
  },
  args: {
    children: 'hamburgefons',
    variant: 'body',
    component: 'span',
  },
};
