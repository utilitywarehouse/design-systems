import type { Meta, StoryObj } from '@storybook/react';

import { FieldsetLegend } from './FieldsetLegend';

const meta: Meta<typeof FieldsetLegend> = {
  title: 'Stories / FieldsetLegend',
  component: FieldsetLegend,
  parameters: { layout: 'centered' },
  argTypes: {
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Pollen fieldset legend',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof FieldsetLegend>;

export const Workshop: Story = {};
