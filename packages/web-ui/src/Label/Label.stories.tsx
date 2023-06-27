import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Web UI / Components / Label',
  component: Label,
  tags: ['autodocs'],
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
