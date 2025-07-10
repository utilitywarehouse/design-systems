import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormFieldGroup } from './FormFieldGroup';

import { Placeholder } from '../../storybook-components';

const meta: Meta<typeof FormFieldGroup> = {
  title: 'Web UI / Stories / FormFieldGroup',
  component: FormFieldGroup,
  argTypes: {
    helperText: { control: { type: 'text' } },
    helperTextPosition: { options: ['top', 'bottom'], control: { type: 'radio' } },
    showHelperTextIcon: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
    error: { control: { type: 'boolean' } },
    errorMessage: { control: { type: 'text' } },
    showErrorMessageIcon: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    label: 'Label',
    defaultValue: ['1', '2'],
    disabled: false,
    helperText: 'Helper text',
    helperTextPosition: 'top',
    showHelperTextIcon: false,
    error: false,
    errorMessage: 'There is an error',
    showErrorMessageIcon: true,
  },
};

export default meta;
type Story = StoryObj<typeof FormFieldGroup>;

export const Workshop: Story = {
  render: args => {
    return (
      <FormFieldGroup {...args}>
        <Placeholder height={100} width={300} />
      </FormFieldGroup>
    );
  },
};
