import * as React from 'react';
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { colors } from '@utilitywarehouse/colour-system';

import { RadioGroup } from './RadioGroup';
import { RadioGroupRoot } from './RadioGroupRoot';

import { Box } from '../Box';
import { Flex } from '../Flex';
import { Radio } from '../Radio';
import { RadioTile } from '../RadioTile';

const meta: Meta<typeof RadioGroup> = {
  title: 'Web UI / Stories / RadioGroup',
  component: RadioGroup,
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: { type: 'radio' },
    },
    defaultValue: { control: { type: 'text' } },
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
    defaultValue: 'wales',
    label: 'Where do you live?',
    disabled: false,
    helperText: '',
    showHelperTextIcon: false,
    error: false,
    errorMessage: 'There is an error',
    showErrorMessageIcon: true,
    contentWidth: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Workshop: Story = {
  render: args => {
    return (
      <Box display="flex" gap={10}>
        <RadioGroup {...args} name="with-radio">
          <Radio value="england" label="England" />
          <Radio value="wales" label="Wales" />
          <Radio value="scotland" label="Scotland" />
          <Radio value="northern-ireland" label="Northern Ireland" />
        </RadioGroup>

        <RadioGroup {...args} name="with-radio-tile">
          <RadioTile value="england" label="England" />
          <RadioTile value="wales" label="Wales" />
          <RadioTile value="scotland" label="Scotland" />
          <RadioTile value="northern-ireland" label="Northern Ireland" />
        </RadioGroup>
      </Box>
    );
  },
};

export const RadioHelperText: Story = {
  name: 'Radio HelperText',
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

export const ContentWidth: Story = {
  name: 'Content Width',
  render: args => {
    return (
      <RadioGroup {...args} helperText="Setting the width of the children elements">
        <RadioTile value="1" label="One" />
        <RadioTile value="2" label="Two" />
        <RadioTile value="3" label="Three" />
      </RadioGroup>
    );
  },
  args: { contentWidth: '200px' },
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

export const Wrap: Story = {
  name: 'Wrap',
  render: args => {
    return (
      <Box height={800} width={400} padding={2} border="2px solid" borderColor={colors.grey500}>
        <RadioGroup {...args} direction="row" helperText="Child elements will wrap by default">
          <RadioTile value="1" label="One" />
          <RadioTile value="2" label="Two" />
          <RadioTile value="3" label="Three" />
          <RadioTile value="4" label="Four" />
          <RadioTile value="5" label="Five" />
        </RadioGroup>
      </Box>
    );
  },
};

export const RadioGroupRootStory: StoryObj<typeof RadioGroupRoot> = {
  name: 'RadioGroupRoot',
  render: args => (
    <Flex component="form" direction="column" gap={8} width="fit-content">
      <RadioGroupRoot {...args} name="radio-story">
        <Radio value="1" label="One" />
        <Radio value="2" label="Two" />
        <Radio value="3" label="Three" />
      </RadioGroupRoot>
      <RadioGroupRoot {...args} name="radio-tiles-story">
        <RadioTile value="1" label="One" />
        <RadioTile value="2" label="Two" />
        <RadioTile value="3" label="Three" />
      </RadioGroupRoot>
    </Flex>
  ),
  parameters: {
    controls: {
      exclude: [
        'helperText',
        'label',
        'helperTextPosition',
        'showHelperTextIcon',
        'error',
        'errorMessage',
        'showErrorMessageIcon',
        'contentWidth',
      ],
    },
  },
};
