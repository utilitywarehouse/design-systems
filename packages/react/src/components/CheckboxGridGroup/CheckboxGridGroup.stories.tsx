import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxGridGroup } from './CheckboxGridGroup';
import { CheckboxGridGroupRoot } from './CheckboxGridGroupRoot';
import { CheckboxTile } from '../CheckboxTile/CheckboxTile';
import { Flex } from '../Flex/Flex';
import { BodyText } from '../BodyText/BodyText';

const meta: Meta<typeof CheckboxGridGroup> = {
  title: 'Stories / CheckboxGridGroup',
  component: CheckboxGridGroup,
  argTypes: {
    helperText: { control: { type: 'text' } },
    helperTextPosition: { options: ['top', 'bottom'], control: { type: 'radio' } },
    showHelperTextIcon: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
    error: { control: { type: 'boolean' } },
    errorMessage: { control: { type: 'text' } },
    showErrorMessageIcon: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    contentWidth: { control: { type: 'text' } },
    columns: { control: { type: 'number' } },
  },
  args: {
    label: 'Label',
    defaultValue: ['1', '2'],
    columns: 2,
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
type Story = StoryObj<typeof CheckboxGridGroup>;

export const Workshop: Story = {
  name: 'CheckboxGridGroup',
  render: args => (
    <form>
      <CheckboxGridGroup {...args} name="checkbox-tiles-story">
        <CheckboxTile value="1" label="One" />
        <CheckboxTile value="2" label="Two" />
        <CheckboxTile value="3" label="Three" />
        <CheckboxTile value="4" label="Four" />
        <CheckboxTile value="5" label="Five" />
        <CheckboxTile value="6" label="Six" />
      </CheckboxGridGroup>
    </form>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState(['1']);
    return (
      <Flex direction="column" gap="400">
        <BodyText>Checked: {value.join(', ')}</BodyText>
        <CheckboxGridGroup defaultValue={value} onValueChange={v => setValue(v)}>
          <CheckboxTile value="1" label="One" />
          <CheckboxTile value="2" label="Two" />
          <CheckboxTile value="3" label="Three" />
          <CheckboxTile value="4" label="Four" />
          <CheckboxTile value="5" label="Five" />
          <CheckboxTile value="6" label="Six" />
        </CheckboxGridGroup>
      </Flex>
    );
  },
};

export const CheckboxGridWithRadioHelperText: Story = {
  name: 'With Checkbox HelperText',
  render: args => {
    return (
      <CheckboxGridGroup {...args}>
        <CheckboxTile value="1" label="One" helperText="One helper text" />
        <CheckboxTile value="2" label="Two" helperText="Two helper text" />
        <CheckboxTile value="3" label="Three" helperText="Three helper text" />
        <CheckboxTile value="4" label="One" helperText="Four helper text" />
        <CheckboxTile value="5" label="Two" helperText="Five helper text" />
        <CheckboxTile value="6" label="Three" helperText="Six helper text" />
      </CheckboxGridGroup>
    );
  },
  args: {
    helperText: '',
  },
};

export const CheckboxGridGroupResponsiveColumns: Story = {
  name: 'With Responsive Columns',
  render: args => {
    return (
      <CheckboxGridGroup {...args}>
        <CheckboxTile value="1" label="One" />
        <CheckboxTile value="2" label="Two" />
        <CheckboxTile value="3" label="Three" />
        <CheckboxTile value="4" label="Four" />
        <CheckboxTile value="5" label="Five" />
        <CheckboxTile value="6" label="Six" />
      </CheckboxGridGroup>
    );
  },
  args: {
    helperText: 'CheckboxGridGroup with Responsive Columns',
    columns: { mobile: 1, tablet: 2, desktop: 3, wide: 6 },
  },
};

export const CheckboxGridGroupRootStory: StoryObj<typeof CheckboxGridGroupRoot> = {
  name: 'CheckboxGridGroupRoot',
  render: args => (
    <Flex asChild gap="800">
      <form>
        <CheckboxGridGroupRoot {...args} name="checkbox-tiles-story">
          <CheckboxTile value="1" label="One" />
          <CheckboxTile value="2" label="Two" />
          <CheckboxTile value="3" label="Three" />
          <CheckboxTile value="4" label="Four" />
          <CheckboxTile value="5" label="Five" />
          <CheckboxTile value="6" label="Six" />
        </CheckboxGridGroupRoot>
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
