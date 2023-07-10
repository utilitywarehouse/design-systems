import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { RadioGridGroup } from './RadioGridGroup';
import { Stack } from '../Stack';

const meta: Meta<typeof RadioGridGroup> = {
  title: 'Web UI / Components / RadioGridGroup',
  component: RadioGridGroup,
  argTypes: {
    error: { control: { type: 'boolean' } },
    defaultValue: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },
    helperTextPosition: { options: ['top', 'bottom'], control: { type: 'radio' } },
    label: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    contentWidth: { control: { type: 'text' } },
    columns: { control: { type: 'number' } },
  },
  args: {
    columns: 3,
    label: 'Radio group label',
    helperText: 'Helper text',
    defaultValue: '1',
    contentWidth: undefined,
    disabled: false,
    error: false,
    errorMessage: 'There is an error',
  },
};

export default meta;
type Story = StoryObj<typeof RadioGridGroup>;

export const RadioGridGroupWorkshop: Story = {
  name: 'RadioGridGroup',
  render: args => {
    return (
      <RadioGridGroup {...args} helperText="RadioGridGroup with Radio">
        <Radio value="1" label="One" />
        <Radio value="2" label="Two" />
        <Radio value="3" label="Three" />
        <Radio value="4" label="Four" />
        <Radio value="5" label="Five" />
        <Radio value="6" label="Six" />
        <Radio value="7" label="Seven" />
        <Radio value="8" label="Eight" />
        <Radio value="9" label="Nine" />
      </RadioGridGroup>
    );
  },
};

export const RadioGridWithRadioHelperText: Story = {
  name: 'With Radio HelperText',
  render: args => {
    return (
      <Stack spacing={8}>
        <RadioGridGroup {...args}>
          <Radio value="1" label="One" helperText="One helper text" />
          <Radio value="2" label="Two" helperText="Two helper text" />
          <Radio value="3" label="Three" helperText="Three helper text" />
          <Radio value="4" label="One" helperText="Four helper text" />
          <Radio value="5" label="Two" helperText="Five helper text" />
          <Radio value="6" label="Three" helperText="Six helper text" />
        </RadioGridGroup>
      </Stack>
    );
  },
  args: {
    columns: 2,
  },
};
