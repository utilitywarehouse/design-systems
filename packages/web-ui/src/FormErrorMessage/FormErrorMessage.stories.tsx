import type { Meta, StoryObj } from '@storybook/react';
import { FormErrorMessage } from './FormErrorMessage';

const meta: Meta<typeof FormErrorMessage> = {
  title: 'Web UI / Components / FormErrorMessage',
  component: FormErrorMessage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormErrorMessage>;

export const Workshop: Story = {
  argTypes: { children: { control: { type: 'text' } } },
  args: { children: 'Error Message' },
};
