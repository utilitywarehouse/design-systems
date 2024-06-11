import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as CheckboxGroup from './checkbox-group.primitive';

const meta: Meta<typeof CheckboxGroup.Root> = {
  title: 'Web UI / Components / RadixCheckboxGroup',
  component: CheckboxGroup.Root,
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup.Root>;

export const Workshop: Story = {
  render: args => (
    <CheckboxGroup.Root defaultValue={['1']} name="example">
      <CheckboxGroup.Item value="1">Fun</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">Serious</CheckboxGroup.Item>
      <CheckboxGroup.Item value="3">Smart</CheckboxGroup.Item>
    </CheckboxGroup.Root>
  ),
};
