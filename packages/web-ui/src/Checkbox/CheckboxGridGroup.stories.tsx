import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGridGroup } from './CheckboxGridGroup';
import { CheckboxTile } from './CheckboxTile';

const meta: Meta<typeof CheckboxGridGroup> = {
  title: 'Web UI / Components / Checkbox / CheckboxGridGroup',
  component: CheckboxGridGroup,
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: { type: 'radio' },
    },
    helperText: { control: { type: 'text' } },
    helperTextPosition: { options: ['top', 'bottom'], control: { type: 'radio' } },
    showHelperTextIcon: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
    error: { control: { type: 'boolean' } },
    errorMessage: { control: { type: 'text' } },
    showErrorMessageIcon: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    contentWidth: { control: { type: 'text' } },
    columns: { control: { type: 'number' } },
  },
  args: {
    label: 'Label',
    defaultValue: ['1', '2'],
    columns: 2,
    direction: 'column',
    disabled: false,
    helperText: 'Helper text',
    helperTextPosition: 'top',
    showHelperTextIcon: false,
    error: false,
    errorMessage: 'There is an error',
    showErrorMessageIcon: true,
    contentWidth: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGridGroup>;

export const Workshop: Story = {
  name: 'CheckboxGridGroup',
  render: args => (
    <form>
      <CheckboxGridGroup {...args} name="checkbox-tiles-story">
        <CheckboxTile value="1" label="One" />
        <CheckboxTile value="2" label="Two" />
        <CheckboxTile value="3" label="Three" />
        <CheckboxTile value="4" label="Four" />
        <CheckboxTile value="5" label="Five" />
        <CheckboxTile value="6" label="Six" />
      </CheckboxGridGroup>
    </form>
  ),
};
