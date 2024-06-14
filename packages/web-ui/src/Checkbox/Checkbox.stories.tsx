import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Web UI / Components / Checkbox',
  component: Checkbox,
  argTypes: {
    helperText: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    disabled: { type: 'boolean' },
  },
  args: {
    label: 'Label',
    helperText: 'Helper text',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Workshop: Story = {};
