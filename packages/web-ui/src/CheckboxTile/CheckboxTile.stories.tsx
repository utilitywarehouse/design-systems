import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxTile } from './CheckboxTile';

const meta: Meta<typeof CheckboxTile> = {
  title: 'Web UI / Components / CheckboxTile',
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

export const KitchenSink: Story = {};
export const Workshop: Story = {};
