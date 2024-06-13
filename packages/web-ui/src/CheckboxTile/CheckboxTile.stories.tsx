import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from './BaseCheckboxGroup';
import { CheckboxTile } from './CheckboxTile';

const meta: Meta<typeof CheckboxTile> = {
  title: 'Web UI / Components / CheckboxTile',
  component: CheckboxTile,
};

export default meta;
type Story = StoryObj<typeof CheckboxTile>;

export const Workshop: Story = {
  render: args => (
    <CheckboxGroup defaultValue={['1']} name="checkbox-cards-story">
      <CheckboxTile value="1" label="Fun" />
      <CheckboxTile value="2" label="Serious" />
      <CheckboxTile value="3" label="Smart" />
    </CheckboxGroup>
  ),
};
