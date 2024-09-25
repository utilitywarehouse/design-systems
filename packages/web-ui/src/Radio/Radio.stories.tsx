import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { RadioGroup } from '../RadioGroup';
import { Stack } from '../Stack';
import { Text, TextProps } from '../Text';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Web UI / Components / Radio / Radio',
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const RadioStory: Story = {
  name: 'Radio',
  render: args => {
    return (
      <Stack spacing={4}>
        <RadioGroup value="2" label="Unchecked Radio">
          <Radio {...args} />
        </RadioGroup>

        <RadioGroup defaultValue={args.value} label="Checked Radio">
          <Radio {...args} />
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

export const WithCustomLabel: Story = {
  name: 'Custom Radio label',
  render: () => {
    const CustomLabel = (props: { children: TextProps['children'] }) => (
      <Text {...props} variant="subtitle" component="span" bold sx={{ lineHeight: '24px' }} />
    );
    return (
      <RadioGroup defaultValue="1" label="Radio group label">
        <Radio value="1" label={<CustomLabel>One</CustomLabel>} />
        <Radio value="2" label={<CustomLabel>Two</CustomLabel>} />
      </RadioGroup>
    );
  },
};
