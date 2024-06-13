import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as CheckboxCards from './CheckboxTileGroup';

const meta: Meta<typeof CheckboxCards.Root> = {
  title: 'Web UI / Components / RadixCheckboxCards',
  component: CheckboxCards.Root,
};

export default meta;
type Story = StoryObj<typeof CheckboxCards.Root>;

export const Workshop: Story = {
  render: args => (
    <CheckboxCards.Root defaultValue={['1']} name="checkbox-cards-story">
      <CheckboxCards.Item value="1">Fun</CheckboxCards.Item>
      <CheckboxCards.Item value="2">Serious</CheckboxCards.Item>
      <CheckboxCards.Item value="3">Smart</CheckboxCards.Item>
    </CheckboxCards.Root>
  ),
};
