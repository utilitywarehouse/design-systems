import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from './CheckboxGroupAlt';
import { CheckboxTile } from './CheckboxTileAlt';
import { Flex } from '../Flex';
import { Checkbox } from './CheckboxAlt';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Web UI / Components / CheckboxGroup (alt)',
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
        <Checkbox value="fun" label="Fun" />
        <Checkbox value="serious" label="Serious" />
        <Checkbox value="smart" label="Smart" />
      </CheckboxGroup>
      <CheckboxGroup {...args} name="checkbox-story-two">
        <Checkbox value="fun" label="Fun" />
        <Checkbox value="serious" label="Serious" />
        <Checkbox value="smart" label="Smart" />
      </CheckboxGroup>
      <CheckboxGroup {...args} name="checkbox-tiles-story">
        <CheckboxTile value="fun" label="Fun" />
        <CheckboxTile value="serious" label="Serious" />
        <CheckboxTile value="smart" label="Smart" />
      </CheckboxGroup>
      <CheckboxGroup {...args} name="checkbox-tiles-story-two">
        <CheckboxTile value="fun" label="Fun" />
        <CheckboxTile value="serious" label="Serious" />
        <CheckboxTile value="smart" label="Smart" />
      </CheckboxGroup>
    </Flex>
  ),
};
