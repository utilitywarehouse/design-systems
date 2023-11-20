import type { Meta, StoryObj } from '@storybook/react';
import { HelperText } from './HelperText';

const meta: Meta<typeof HelperText> = {
  title: 'Web UI / Typography / HelperText',
  component: HelperText,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HelperText>;

export const Workshop: Story = {
  argTypes: {
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
    validationStatus: { control: { type: 'radio' }, options: ['default', 'valid', 'invalid'] },
  },
  args: {
    children: 'Helper text',
    disabled: false,
    error: false,
    validationStatus: undefined,
  },
};
