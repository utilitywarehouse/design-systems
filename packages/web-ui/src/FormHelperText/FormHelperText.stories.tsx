import type { Meta, StoryObj } from '@storybook/react';
import { FormHelperText } from './FormHelperText';

const meta: Meta<typeof FormHelperText> = {
  title: 'Web UI / Components / FormHelperText',
  component: FormHelperText,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormHelperText>;

export const Workshop: Story = {
  argTypes: {
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Helper text',
    disabled: false,
    error: false,
  },
};
