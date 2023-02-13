import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';
import { colors, borderRadius } from '@utilitywarehouse/customer-ui-design-tokens';
import { backgroundColors } from '../types';
import { Heading } from '../Typography';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: {
        type: 'radio',
        options: backgroundColors,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  name: 'Workshop',
  render: args => {
    const hexValue = args.background ? (colors as { [key: string]: string })[args.background] : '';
    return (
      <Box {...args}>
        {/* TODO change component to span and fix */}
        <Heading component="div" variant="h2">
          {args.background} ({hexValue})
        </Heading>
      </Box>
    );
  },
  args: {
    component: 'div',
    children: '',
    background: 'white',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.medium,
  },
};
