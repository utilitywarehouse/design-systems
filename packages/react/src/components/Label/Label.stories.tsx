import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Stories / Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    nested: { control: { type: 'boolean' } },
    disableUserSelect: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Pollen Label',
    nested: false,
    disabled: false,
    disableUserSelect: false,
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Workshop: Story = {};
