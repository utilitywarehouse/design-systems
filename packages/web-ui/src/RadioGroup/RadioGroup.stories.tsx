import type { Meta, StoryObj } from '@storybook/react';
import { RadioItem } from './RadioItem';
import { RadioGroup } from './RadioGroup';
import { Box } from '../Box';
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
};
const sharedArgs = {
  defaultValue: '1',
  errorMessage: 'There is an error',
  disabled: false,
  error: false,
  label: 'Radio group',
  helperText: 'Helper text',
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
      <Box bgcolor="white" padding={4}>
        <RadioGroup {...args}>
          <RadioItem value="1">One</RadioItem>
          <RadioItem value="2">Two</RadioItem>
          <RadioItem value="3">Three</RadioItem>
        </RadioGroup>
      </Box>
    );
  },
  argTypes,
  args: sharedArgs,
};

export const WithRadioItemHelperText: Story = {
  name: 'With RadioItem HelperText',
  render: args => {
    return (
      <Box bgcolor="white" padding={4}>
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
      </Box>
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
      <Box bcolor="white" padding={4}>
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
      </Box>
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
  render: args => {
    return (
      <Box bcolor="white" padding={4}>
        <RadioGroup {...args}>
          <RadioItem value="1">One</RadioItem>
          <RadioItem value="2">Two</RadioItem>
          <RadioItem value="3">Three</RadioItem>
        </RadioGroup>
      </Box>
    );
  },
  argTypes,
  args: { ...sharedArgs, error: true, errorMessage: 'RadioGroup error message' },
};
