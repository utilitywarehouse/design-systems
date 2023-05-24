import type { Meta, StoryObj } from '@storybook/react';
import { RadioTile } from './RadioTile';
import { RadioGroup } from './RadioGroup';
import { Stack } from '../Stack';

const meta: Meta<typeof RadioTile> = {
  title: 'Web UI / Components / RadioGroup',
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
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    value: '1',
    disabled: false,
    children: 'One',
  },
};

export const RadioTileStoryWithOneLongLabel: Story = {
  name: 'RadioTile with one long label',
  render: () => {
    return (
      <RadioGroup value="2" label="Radio group">
        <RadioTile value="1">One</RadioTile>
        <RadioTile value="2">Twit Twoooooooooooooo</RadioTile>
        <RadioTile value="3">Three</RadioTile>
      </RadioGroup>
    );
  },
  argTypes: {
    value: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    value: '1',
    disabled: false,
    children: 'One',
  },
};
