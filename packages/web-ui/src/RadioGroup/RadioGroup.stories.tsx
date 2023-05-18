import type { Meta, StoryObj } from '@storybook/react';
import { RadioItem } from './RadioItem';
import { RadioTile } from './RadioTile';
import { RadioGroup } from './RadioGroup';
import { Stack } from '../Stack';
import { useState } from 'react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Web UI / Components / RadioGroup',
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const argTypes = {
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
  isReadOnly: { control: { type: 'boolean' } },
  contentWidth: { control: { type: 'text' } },
};
const sharedArgs = {
  label: 'Radio group label',
  helperText: 'Helper text',
  defaultValue: '1',
  contentWidth: undefined,
  disabled: false,
  error: false,
  errorMessage: 'There is an error',
};

export const Workshop: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI---MASTER?node-id=902-9379&t=XTterR22jM1rC0Xr-0',
    },
  },
  render: args => {
    return (
      <Stack spacing={8}>
        <RadioGroup {...args} helperText="RadioGroup with RadioItem">
          <RadioItem value="1">One</RadioItem>
          <RadioItem value="2">Two</RadioItem>
          <RadioItem value="3">Three</RadioItem>
        </RadioGroup>
        <RadioGroup {...args} helperText="RadioGroup with RadioTile">
          <RadioTile value="1">One</RadioTile>
          <RadioTile value="2">Two</RadioTile>
          <RadioTile value="3">Three</RadioTile>
        </RadioGroup>
      </Stack>
    );
  },
  argTypes,
  args: sharedArgs,
};

export const WithRadioItemHelperText: Story = {
  name: 'With RadioItem HelperText',
  render: args => {
    return (
      <Stack spacing={8}>
        <RadioGroup {...args}>
          <RadioItem value="1" helperText="One helper text">
            One
          </RadioItem>
          <RadioItem value="2" helperText="Two helper text">
            Two
          </RadioItem>
          <RadioItem value="3" helperText="Three helper text">
            Three
          </RadioItem>
        </RadioGroup>
        <RadioGroup {...args}>
          <RadioTile value="1" helperText="One helper text">
            One
          </RadioTile>
          <RadioTile value="2" helperText="Two helper text">
            Two
          </RadioTile>
          <RadioTile value="3" helperText="Three helper text">
            Three
          </RadioTile>
        </RadioGroup>
      </Stack>
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
        onChange={setSelected}
        helperText={`The selected value is: ${selected}`}
      >
        <RadioItem value="1">One</RadioItem>
        <RadioItem value="2">Two</RadioItem>
        <RadioItem value="3">Three</RadioItem>
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
        <RadioItem value="1">One</RadioItem>
        <RadioItem value="2">Two</RadioItem>
        <RadioItem value="3">Three</RadioItem>
      </RadioGroup>
    );
  },
  argTypes,
  args: { ...sharedArgs, error: true, errorMessage: 'Radio group error message' },
};
