import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { RadioTile } from './RadioTile';

import { Flex } from '../Flex';
import { RadioGroup } from '../RadioGroup';
import { Stack } from '../Stack';

const meta: Meta<typeof RadioTile> = {
  title: 'Web UI / Stories / RadioTile',
  component: RadioTile,
};

export default meta;
type Story = StoryObj<typeof RadioTile>;

export const RadioTileStory: Story = {
  name: 'RadioTile',
  render: args => {
    return (
      <Stack spacing={4}>
        <RadioGroup value="2" label="Unchecked RadioTile">
          <RadioTile {...args} />
        </RadioGroup>

        <RadioGroup defaultValue={args.value} label="Checked RadioTile">
          <RadioTile {...args} />
        </RadioGroup>
      </Stack>
    );
  },
  argTypes: {
    value: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    value: '1',
    disabled: false,
    label: 'Label',
    helperText: 'Helper text',
  },
};

export const RadioTileStoryWithOneLongLabel: Story = {
  name: 'RadioTile with one long label',
  render: () => {
    return (
      <RadioGroup label="Radio group">
        <RadioTile value="1" label="One" />
        <RadioTile value="2" label="Twit Twoooooooooooooo" />
        <RadioTile value="3" label="Three" />
      </RadioGroup>
    );
  },
};

export const RadioTileWidth: Story = {
  render: () => {
    return (
      <Flex width={300}>
        <RadioGroup
          label="Would you like to keepan existing mobile number for this SIM?"
          direction="row"
          contentWidth="100%"
        >
          <RadioTile value="yes" label="Yes" />
          <RadioTile value="no" label="No" />
        </RadioGroup>
      </Flex>
    );
  },
};
