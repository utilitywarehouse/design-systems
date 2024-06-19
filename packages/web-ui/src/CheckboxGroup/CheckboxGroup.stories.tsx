import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from './CheckboxGroup';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Checkbox } from '../Checkbox';
import { CheckboxTile } from '../CheckboxTile';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Web UI / Components / Checkbox / CheckboxGroup',
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
  name: 'CheckboxGroup',
  render: args => (
    <Flex component="form" gap={8}>
      <CheckboxGroup {...args} name="checkbox-story">
        <Checkbox value="1" label="One" />
        <Checkbox value="2" label="Two" />
        <Checkbox value="3" label="Three" />
      </CheckboxGroup>
      <CheckboxGroup {...args} name="checkbox-tiles-story">
        <CheckboxTile value="1" label="One" />
        <CheckboxTile value="2" label="Two" />
        <CheckboxTile value="3" label="Three" />
      </CheckboxGroup>
    </Flex>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState(['1']);
    return (
      <Flex direction="column" gap={4}>
        <Text>Checked: {value.join(', ')}</Text>
        <CheckboxGroup defaultValue={value} onValueChange={v => setValue(v)}>
          <Checkbox value="1" label="One" />
          <Checkbox value="2" label="Two" />
          <Checkbox value="3" label="Three" />
        </CheckboxGroup>
      </Flex>
    );
  },
};
