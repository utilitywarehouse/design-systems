import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: 'text' } },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Workshop: Story = {
  render: args => {
    return <Typography {...args} />;
  },
  args: {
    children: 'hamburgefons',
    component: 'span',
    fontFamily: 'fontFamily.secondary',
    fontWeight: 'fontWeights.secondary.regular',
    fontSize: '1rem',
    lineHeight: 1.5,
    textTransform: 'capitalize',
    color: 'text.body.primary',
  },
};
