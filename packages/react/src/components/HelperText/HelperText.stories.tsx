import type { Meta, StoryObj } from '@storybook/react';

import { HelperText } from './HelperText';

const meta: Meta<typeof HelperText> = {
  title: 'Stories / HelperText',
  component: HelperText,
  parameters: { layout: 'centered' },
  argTypes: {
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    disableUserSelect: { control: { type: 'boolean' } },
    showIcon: { control: { type: 'boolean' } },
    validationStatus: { control: { type: 'radio' }, options: [undefined, 'valid', 'invalid'] },
  },
  args: {
    children: 'Pollen helper text',
    disabled: false,
    showIcon: false,
    validationStatus: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof HelperText>;

export const Workshop: Story = {};
