import type { Meta, StoryObj } from '@storybook/react';
import { HelperText } from './HelperText';

const meta: Meta<typeof HelperText> = {
  title: 'Web UI / Components / HelperText',
  component: HelperText,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HelperText>;

export const Workshop: Story = {
  argTypes: {
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Helper text',
    disabled: false,
  },
};
