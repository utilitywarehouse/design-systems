import type { Meta, StoryObj } from '@storybook/react';
import { MyButton } from './Button';

const meta = {
  title: 'components/Button',
  component: MyButton,
  args: {
    text: 'Hello world',
  },
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {};
