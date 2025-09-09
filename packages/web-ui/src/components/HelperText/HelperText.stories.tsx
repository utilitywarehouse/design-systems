import type { Meta, StoryObj } from '@storybook/react-vite';

import { HelperText } from './HelperText';

const meta: Meta<typeof HelperText> = {
  title: 'Web UI / Stories / HelperText',
  component: HelperText,
  argTypes: {
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    showIcon: { control: { type: 'boolean' } },
    validationStatus: { control: { type: 'radio' }, options: [undefined, 'valid', 'invalid'] },
  },
  args: {
    children: 'Helper text',
    disabled: false,
    showIcon: false,
    validationStatus: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof HelperText>;

export const Workshop: Story = {};
