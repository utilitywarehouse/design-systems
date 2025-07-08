import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { RadioGridGroup } from './RadioGridGroup';

import { RadioTile } from '../RadioTile';

const meta: Meta<typeof RadioGridGroup> = {
  title: 'Web UI / Stories / RadioGridGroup',
  component: RadioGridGroup,
  argTypes: {
    error: { control: { type: 'boolean' } },
    defaultValue: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },
    helperTextPosition: { options: ['top', 'bottom'], control: { type: 'radio' } },
    showHelperTextIcon: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    showErrorMessageIcon: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    contentWidth: { control: { type: 'text' } },
    columns: { control: { type: 'number' } },
  },
  args: {
    defaultValue: '1',
    columns: 2,
    label: 'Label',
    disabled: false,
    helperText: 'Helper text',
    showHelperTextIcon: false,
    error: false,
    errorMessage: 'There is an error',
    showErrorMessageIcon: true,
    contentWidth: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof RadioGridGroup>;

export const Workshop: Story = {
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
    helperText: 'RadioGridGroup with RadioTile',
  },
};

export const RadioGridWithRadioHelperText: Story = {
  name: 'With Radio HelperText',
  render: args => {
    return (
      <RadioGridGroup {...args}>
        <RadioTile value="1" label="One" helperText="One helper text" />
        <RadioTile value="2" label="Two" helperText="Two helper text" />
        <RadioTile value="3" label="Three" helperText="Three helper text" />
        <RadioTile value="4" label="One" helperText="Four helper text" />
        <RadioTile value="5" label="Two" helperText="Five helper text" />
        <RadioTile value="6" label="Three" helperText="Six helper text" />
      </RadioGridGroup>
    );
  },
  args: {
    helperText: '',
  },
};

export const RadioGridGroupResponsiveColumns: Story = {
  name: 'With Responsive Columns',
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
    helperText: 'RadioGridGroup with Responsive Columns',
    columns: { mobile: 1, tablet: 2, desktop: 3, wide: 6 },
  },
};
