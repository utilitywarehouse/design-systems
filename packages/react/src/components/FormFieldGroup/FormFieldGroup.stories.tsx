import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { FormFieldGroup } from './FormFieldGroup';
import { Box } from '../Box/Box';

const meta: Meta<typeof FormFieldGroup> = {
  title: 'Stories / FormFieldGroup',
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
        <Box className="uwp-sb-Placeholder" height="100px" width="300px" />
      </FormFieldGroup>
    );
  },
};
