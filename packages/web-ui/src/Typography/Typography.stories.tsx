import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Web UI / Components / Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Workshop: Story = {
  parameters: { layout: 'centered' },
  argTypes: {
    color: {
      control: {
        type: 'text',
      },
    },
    letterSpacing: {
      control: {
        type: 'text',
      },
    },
    textTransform: {
      options: ['capitalize', 'uppercase', 'lowercase', 'none'],
      control: {
        type: 'radio',
      },
    },
  },
  args: {
    children: 'hamburgefons',
    component: 'span',
    fontFamily: 'fontFamily.secondary',
    color: 'text.body.success.default',
    textTransform: 'capitalize',
    padding: 0,
    margin: 0,
  },
};
