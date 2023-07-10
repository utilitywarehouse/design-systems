import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';
import { Stack } from '../Stack';
import { useState } from 'react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Web UI / Components / RadioGroup',
  component: RadioGroup,
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: { type: 'radio' },
    },
    error: { control: { type: 'boolean' } },
    defaultValue: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },
    helperTextPosition: { options: ['top', 'bottom'], control: { type: 'radio' } },
    label: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    contentWidth: { control: { type: 'text' } },
  },
  args: {
    defaultValue: '1',
    label: 'Radio group label',
    helperText: 'Helper text',
    contentWidth: undefined,
    disabled: false,
    error: false,
    errorMessage: 'There is an error',
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Workshop: Story = {
  name: 'RadioGroup',
  render: args => {
    return (
      <RadioGroup {...args} helperText="RadioGroup with Radio">
        <Radio value="1" label="One" />
        <Radio value="2" label="Two" />
        <Radio value="3" label="Three" />
      </RadioGroup>
    );
  },
};

export const WithRadioHelperText: Story = {
  name: 'With Radio HelperText',
  render: args => {
    return (
      <Stack spacing={8}>
        <RadioGroup {...args}>
          <Radio value="1" label="One" helperText="One helper text" />
          <Radio value="2" label="Two" helperText="Two helper text" />
          <Radio value="3" label="Three" helperText="Three helper text" />
        </RadioGroup>
      </Stack>
    );
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
  args: {
    errorMessage: 'There is an error',
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
  args: {
    error: true,
    errorMessage: 'Radio group error message',
  },
};
