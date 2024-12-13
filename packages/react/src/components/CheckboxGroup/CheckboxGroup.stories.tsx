import * as React from 'react';
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxGroupRoot } from './CheckboxGroupRoot';
import { Flex } from '../Flex/Flex';
import { Checkbox } from '../Checkbox/Checkbox';
import { BodyText } from '../BodyText/BodyText';
import { CheckboxTile } from '../CheckboxTile/CheckboxTile';
import { Box } from '../Box/Box';
import { colors } from '@utilitywarehouse/colour-system';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Stories / CheckboxGroup',
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
    label: 'Which services do you currently have with UW?',
    defaultValue: ['1', '2'],
    direction: 'column',
    disabled: false,
    helperText: 'Select all that apply',
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
    <Flex asChild gap="800">
      <form>
        <CheckboxGroup {...args} name="checkbox-story">
          <Checkbox value="1" label="Energy" />
          <Checkbox value="2" label="Broadband" />
          <Checkbox value="3" label="Mobile" />
          <Checkbox value="4" label="Insurance" />
        </CheckboxGroup>
        <CheckboxGroup {...args} name="checkbox-tiles-story">
          <CheckboxTile value="1" label="Energy" />
          <CheckboxTile value="2" label="Broadband" />
          <CheckboxTile value="3" label="Mobile" />
          <CheckboxTile value="4" label="Insurance" />
        </CheckboxGroup>
      </form>
    </Flex>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState(['1']);
    return (
      <Flex direction="column" gap="400">
        <BodyText>Checked: {value.join(', ')}</BodyText>
        <CheckboxGroup defaultValue={value} onValueChange={v => setValue(v)}>
          <Checkbox value="1" label="One" />
          <Checkbox value="2" label="Two" />
          <Checkbox value="3" label="Three" />
        </CheckboxGroup>
      </Flex>
    );
  },
};

export const CheckboxHelperText: Story = {
  name: 'Checkbox HelperText',
  render: args => {
    return (
      <CheckboxGroup {...args}>
        <Checkbox value="1" label="Rap" helperText="Including Grime" />
        <Checkbox value="2" label="Rock" helperText="Including Heavy Metal" />
        <Checkbox value="3" label="Folk" helperText="Including World music" />
        <Checkbox value="4" label="Dance" helperText="Including House music" />
      </CheckboxGroup>
    );
  },
  args: {
    label: 'Choose music you enjoy.',
    helperText: 'Please choose wisely.',
  },
};

export const ShowingError: Story = {
  name: 'Error message',
  render: args => {
    const [selected, setSelected] = useState<Array<string>>([]);
    return (
      <CheckboxGroup
        {...args}
        value={selected}
        onValueChange={setSelected}
        error={selected.length < 2}
      >
        <Checkbox value="1" label="Bear" />
        <Checkbox value="2" label="Koala" />
        <Checkbox value="3" label="Wolf" />
        <Checkbox value="4" label="Horse" />
        <Checkbox value="5" label="Chicken" />
        <Checkbox value="6" label="Peacock" />
      </CheckboxGroup>
    );
  },
  args: {
    errorMessage: 'Please pick two.',
    label: 'What are your two favourite animals?',
    helperTextPosition: 'bottom',
  },
};

export const ContentWidth: Story = {
  render: args => {
    return (
      <CheckboxGroup {...args} helperText="Setting the width of the children elements">
        <CheckboxTile value="1" label="One" />
        <CheckboxTile value="2" label="Two" />
        <CheckboxTile value="3" label="Three" />
      </CheckboxGroup>
    );
  },
  args: { contentWidth: '200px' },
};

export const Wrap: Story = {
  render: args => {
    return (
      <Box
        height="800px"
        width="400px"
        padding="200"
        style={{ border: '2px solid', borderColor: colors.grey500 }}
      >
        <CheckboxGroup {...args} direction="row" helperText="Child elements will wrap by default">
          <CheckboxTile value="1" label="One" />
          <CheckboxTile value="2" label="Two" />
          <CheckboxTile value="3" label="Three" />
          <CheckboxTile value="4" label="Four" />
          <CheckboxTile value="5" label="Five" />
        </CheckboxGroup>
      </Box>
    );
  },
};

export const CheckboxGroupRootStory: StoryObj<typeof CheckboxGroupRoot> = {
  name: 'CheckboxGroupRoot',
  render: args => (
    <Flex asChild direction="column" gap="800" width="fit-content">
      <form>
        <CheckboxGroupRoot {...args} name="checkbox-story">
          <Checkbox value="1" label="One" />
          <Checkbox value="2" label="Two" />
          <Checkbox value="3" label="Three" />
        </CheckboxGroupRoot>
        <CheckboxGroupRoot {...args} name="checkbox-tiles-story">
          <CheckboxTile value="1" label="One" />
          <CheckboxTile value="2" label="Two" />
          <CheckboxTile value="3" label="Three" />
        </CheckboxGroupRoot>
      </form>
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
