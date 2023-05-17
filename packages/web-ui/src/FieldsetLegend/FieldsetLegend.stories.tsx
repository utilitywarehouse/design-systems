import type { Meta, StoryObj } from '@storybook/react';
import { FieldsetLegend } from './FieldsetLegend';

const meta: Meta<typeof FieldsetLegend> = {
  title: 'Web UI / Components / FieldsetLegend',
  component: FieldsetLegend,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FieldsetLegend>;

export const Workshop: Story = {
  argTypes: {
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    disabled: false,
    children: 'Fieldset legend',
  },
};
