import type { Meta, StoryObj } from '@storybook/react';
import { RadioTile } from './RadioTile';
import { Box } from '../Box';
import { RadioGroup } from './RadioGroup';
import { Stack } from '../Stack';
import { Text, TextProps } from '../Text';

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
      <Box bgcolor="white" padding={4}>
        <Stack spacing={4}>
          <RadioGroup value="2" label="Unchecked RadioItem">
            <RadioTile {...args} />
          </RadioGroup>

          <RadioGroup defaultValue={args.value} disabled={args.disabled} label="Tile">
            <RadioTile {...args} />
            <RadioTile value="2">Two</RadioTile>
            <RadioTile value="3">Three</RadioTile>
          </RadioGroup>
        </Stack>
      </Box>
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
