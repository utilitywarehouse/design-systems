import type { Meta, StoryObj } from '@storybook/react';
import { RadioGridGroup } from './RadioGridGroup';
import { Stack } from '../Stack';
import { RadioTile } from '../RadioTile';

const meta: Meta<typeof RadioGridGroup> = {
  title: 'Web UI / Components / RadioGridGroup',
  component: RadioGridGroup,
  tags: ['autodocs'],
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
    columns: 2,
    label: 'Label',
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
  name: 'Workshop',
  render: args => {
    return (
      <RadioGridGroup {...args}>
        <RadioTile value="1" label="One" />
        <RadioTile value="2" label="Two" />
        <RadioTile value="3" label="Three" />
        <RadioTile value="4" label="Four" />
        <RadioTile value="5" label="Five" />
        <RadioTile value="6" label="Six" />
      </RadioGridGroup>
    );
  },
  args: {
    helperText: 'RadioGridGroup with Radio',
  },
};

export const RadioGridWithRadioHelperText: Story = {
  name: 'With Radio HelperText',
  render: args => {
    return (
      <Stack spacing={8}>
        <RadioGridGroup {...args}>
          <RadioTile value="1" label="One" helperText="One helper text" />
          <RadioTile value="2" label="Two" helperText="Two helper text" />
          <RadioTile value="3" label="Three" helperText="Three helper text" />
          <RadioTile value="4" label="One" helperText="Four helper text" />
          <RadioTile value="5" label="Two" helperText="Five helper text" />
          <RadioTile value="6" label="Three" helperText="Six helper text" />
        </RadioGridGroup>
      </Stack>
    );
  },
  args: {
    helperText: '',
  },
};
