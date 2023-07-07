import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radix';
import { RadioGroup } from './RadixRadioGroup';
import { Stack } from '../Stack';
import { useState } from 'react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Web UI / Components / RadixRadioGroup',
  component: RadioGroup,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const argTypes = {
  orientation: {
    options: ['vertical', 'horizontal'],
    control: { type: 'radio' },
  },
  error: { control: { type: 'boolean' } },
  defaultValue: { control: { type: 'text' } },
  helperText: { control: { type: 'text' } },
  helperTextPosition: { options: ['above', 'below'], control: { type: 'radio' } },
  label: { control: { type: 'text' } },
  errorMessage: { control: { type: 'text' } },
  disabled: { control: { type: 'boolean' } },
  isReadOnly: { control: { type: 'boolean' } },
  contentWidth: { control: { type: 'text' } },
  columns: { control: { type: 'number' } },
};
const sharedArgs = {
  label: 'Radix Radio group label',
  helperText: 'Helper text',
  defaultValue: '1',
  contentWidth: undefined,
  disabled: false,
  error: false,
  errorMessage: 'There is an error',
};

export const Workshop: Story = {
  name: 'Radix RadioGroup',
  render: args => {
    return (
      <RadioGroup {...args} helperText="RadioGroup with Radio">
        <Radio value="1" label="One" />
        <Radio value="2" label="Two" />
        <Radio value="3" label="Three" />
      </RadioGroup>
    );
  },
  argTypes,
  args: sharedArgs,
};

export const WithRadioHelperText: Story = {
  name: 'With Radio HelperText',
  render: args => {
    return (
      <RadioGroup {...args}>
        <Radio value="1" label="One" helperText="One helper text" />
        <Radio value="2" label="Two" helperText="Two helper text" />
        <Radio value="3" label="Three" helperText="Three helper text" />
      </RadioGroup>
    );
  },
  argTypes,
  args: {
    defaultValue: '1',
    disabled: false,
    error: false,
    label: 'Radio group',
  },
};

export const Controlled: Story = {
  render: args => {
    const [selected, setSelected] = useState('');

    return (
      <RadioGroup
        {...args}
        value={selected}
        onValueChange={setSelected}
        helperText={`The selected value is: ${selected}`}
      >
        <Radio value="1" label="One" />
        <Radio value="2" label="Two" />
        <Radio value="3" label="Three" />
      </RadioGroup>
    );
  },
  argTypes,
  args: {
    errorMessage: 'There is an error',
    disabled: false,
    error: false,
    label: 'Controlled Radio Group',
  },
};

export const ShowingError: Story = {
  name: 'Error message',
  render: args => {
    return (
      <RadioGroup {...args}>
        <Radio value="1" label="One" />
        <Radio value="2" label="Two" />
        <Radio value="3" label="Three" />
      </RadioGroup>
    );
  },
  argTypes,
  args: { ...sharedArgs, error: true, errorMessage: 'Radio group error message' },
};

export const Columns: Story = {
  name: 'RadioGroup columns',
  render: args => {
    return (
      <RadioGroup {...args} label="RadioGroup with columns">
        <Radio value="1" label="One" />
        <Radio value="2" label="Two" />
        <Radio value="3" label="Three" />
        <Radio value="4" label="Four" />
        <Radio value="5" label="Five" />
        <Radio value="6" label="Six" />
      </RadioGroup>
    );
  },
  argTypes,
  args: { columns: 2, ...sharedArgs },
};
