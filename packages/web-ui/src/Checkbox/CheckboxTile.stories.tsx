import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxTile } from './CheckboxTile';

const meta: Meta<typeof CheckboxTile> = {
  title: 'Web UI / Components / Checkbox / CheckboxTile',
  component: CheckboxTile,
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
type Story = StoryObj<typeof CheckboxTile>;

export const Workshop: Story = { name: 'CheckboxTile' };
