import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Flex } from '../Flex';
import { Text } from '../Text';

const meta: Meta<typeof Checkbox> = {
  title: 'Web UI / Components / Checkbox / Checkbox',
  component: Checkbox,
  argTypes: {
    helperText: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
    disabled: { type: 'boolean' },
  },
  args: {
    label: 'Label',
    helperText: 'Helper text',
    disabled: false,
    value: '1',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Workshop: Story = {};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Flex direction="column" gap={4}>
        <Text>Checked: {checked ? 'true' : 'false'}</Text>
        <Checkbox value="1" label="One" checked={checked} onCheckedChange={c => setChecked(c)} />
      </Flex>
    );
  },
};
