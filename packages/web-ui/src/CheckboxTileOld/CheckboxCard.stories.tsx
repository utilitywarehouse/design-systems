import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxCard, CheckboxCardGroup } from './CheckboxCard';

const meta: Meta<typeof CheckboxCardGroup> = {
  title: 'Web UI / Components / CheckboxCardGroup',
  component: CheckboxCardGroup,
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: { type: 'radio' },
    },
    defaultValue: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },
    helperTextPosition: { options: ['top', 'bottom'], control: { type: 'radio' } },
    showHelperTextIcon: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
    error: { control: { type: 'boolean' } },
    errorMessage: { control: { type: 'text' } },
    showErrorMessageIcon: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    contentWidth: { control: { type: 'text' } },
  },
  args: {
    label: 'Label',
    disabled: false,
    helperText: 'Helper text',
    showHelperTextIcon: false,
    error: false,
    errorMessage: 'There is an error',
    showErrorMessageIcon: true,
    contentWidth: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxCardGroup>;

export const Workshop: Story = {
  render: args => (
    <CheckboxCardGroup {...args}>
      <CheckboxCard value="Fun" label="Fun">
        fun
      </CheckboxCard>
      <CheckboxCard value="Serious" label="Serious">
        serious
      </CheckboxCard>
      <CheckboxCard value="Smart" label="Smart">
        smart
      </CheckboxCard>
    </CheckboxCardGroup>
  ),
};
