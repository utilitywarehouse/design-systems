import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { FormField } from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Web UI / Components / FormField',
  component: FormField,
  argTypes: {
    helperTextPosition: { control: { type: 'radio' }, options: ['top', 'bottom'] },
    showHelperTextIcon: { control: { type: 'boolean' } },
  },
  args: {
    label: 'Label',
    helperText: 'Helper text',
    helperTextPosition: 'top',
    showHelperTextIcon: true,
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Workshop: Story = {};

export const WithInput: Story = {
  render: args => {
    return (
      <FormField {...args}>
        <input />
      </FormField>
    );
  },
};
