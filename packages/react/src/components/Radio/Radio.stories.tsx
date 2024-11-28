import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from './Radio';
import { Flex } from '../Flex/Flex';
import { RadioGroup } from '../RadioGroup/RadioGroup';

const meta: Meta<typeof Radio> = {
  title: 'Stories / Radio',
  component: Radio,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Workshop: Story = {
  render: args => {
    return (
      <Flex gap="32px">
        <RadioGroup value="2" label="Unchecked Radio">
          <Radio {...args} />
        </RadioGroup>

        <RadioGroup defaultValue={args.value} label="Checked Radio">
          <Radio {...args} />
        </RadioGroup>
      </Flex>
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
    label: 'Radio label',
    helperText: 'Radio helper text',
  },
};
