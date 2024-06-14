import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxTile } from './CheckboxTile';
import { Flex } from '../Flex';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Web UI / Components / CheckboxGroup (new)',
  component: CheckboxGroup,
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
  },
  args: {
    label: 'Label',
    defaultValue: ['1', '2'],
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
type Story = StoryObj<typeof CheckboxGroup>;

export const Workshop: Story = {
  render: args => (
    <Flex gap={8}>
      <CheckboxGroup {...args} name="checkbox-story">
        <Checkbox value="1" label="Fun" />
        <Checkbox value="2" label="Serious" />
        <Checkbox value="3" label="Smart" />
      </CheckboxGroup>
      <CheckboxGroup {...args} name="checkbox-tiles-story">
        <CheckboxTile value="1" label="Fun" />
        <CheckboxTile value="2" label="Serious" />
        <CheckboxTile value="3" label="Smart" />
      </CheckboxGroup>
    </Flex>
  ),
};
