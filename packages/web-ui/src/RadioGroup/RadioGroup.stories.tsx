import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';
import { useState } from 'react';
import { RadioTile } from './RadioTile';
import { Box } from '../Box';

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
    label: 'Label',
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
  render: args => {
    return (
      <Box display="flex" gap={8}>
        <RadioGroup {...args} helperText="RadioGroup with Radio" name="with-radio">
          <Radio value="1" label="One" />
          <Radio value="2" label="Two" />
          <Radio value="3" label="Three" />
        </RadioGroup>
        <RadioGroup {...args} helperText="RadioGroup with RadioTile" name="with-radio-tile">
          <RadioTile value="1" label="One" />
          <RadioTile value="2" label="Two" />
          <RadioTile value="3" label="Three" />
        </RadioGroup>
      </Box>
    );
  },
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
  args: {
    helperText: '',
  },
};

export const Width: Story = {
  name: 'Width',
  render: args => {
    return (
      <RadioGroup {...args} helperText="Setting the width of the children elements">
        <RadioTile value="1" label="One" />
        <RadioTile value="2" label="Two" />
        <RadioTile value="3" label="Three" />
      </RadioGroup>
    );
  },
  args: { contentWidth: '100%' },
};

export const Controlled: Story = {
  render: args => {
    const options = ['Bear', 'Koala', 'Wolf', 'Horse'];
    const [selected, setSelected] = useState(options[0]);
    return (
      <RadioGroup
        {...args}
        value={selected}
        onValueChange={setSelected}
        helperText={`Your favourite animal is a ${selected}`}
      >
        {options.map(animal => (
          <Radio key={animal} value={animal} label={animal} />
        ))}
      </RadioGroup>
    );
  },
  args: {
    errorMessage: 'There is an error',
    label: 'What is your favourite animal?',
  },
};

export const ShowingError: Story = {
  name: 'Error message',
  render: args => {
    const [selected, setSelected] = useState('');
    return (
      <RadioGroup {...args} value={selected} onValueChange={setSelected} error={!selected}>
        <Radio value="1" label="Bear" />
        <Radio value="2" label="Koala" />
        <Radio value="3" label="Wolf" />
        <Radio value="4" label="Horse" />
      </RadioGroup>
    );
  },
  args: {
    errorMessage: 'Please tell us what your favourite animal is.',
    label: 'What is your favourite animal?',
    helperText: 'These are the best animals.',
    helperTextPosition: 'bottom',
  },
};
