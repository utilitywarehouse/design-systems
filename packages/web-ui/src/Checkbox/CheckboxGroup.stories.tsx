import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';
import { BaseCheckboxGroup } from '../CheckboxTile/BaseCheckboxGroup';

const meta: Meta<typeof BaseCheckboxGroup> = {
  title: 'Web UI / Components / CheckboxGroup',
  component: BaseCheckboxGroup,
  argTypes: {
    dir: {
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
    defaultValue: ['1'],
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
type Story = StoryObj<typeof BaseCheckboxGroup>;

export const KitchenSink: Story = {};
export const Workshop: Story = {
  render: args => (
    <BaseCheckboxGroup {...args}>
      {/* <Checkbox label="Fun" /> */}
      {/* <Checkbox label="Serious" /> */}
      {/* <Checkbox label="Smart" /> */}
      <Checkbox value="1" label="Fun" />
      <Checkbox value="2" label="Serious" />
      <Checkbox value="3" label="Smart" />
    </BaseCheckboxGroup>
  ),
};
