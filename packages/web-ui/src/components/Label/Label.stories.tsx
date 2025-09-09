import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Web UI / Stories / Label',
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Workshop: Story = {
  argTypes: {
    children: { control: { type: 'text' } },
    nested: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Label',
    nested: false,
    disabled: false,
  },
};
