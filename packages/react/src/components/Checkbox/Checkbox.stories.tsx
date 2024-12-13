import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { Flex } from '../Flex/Flex';
import { BodyText } from '../BodyText/BodyText';

const meta: Meta<typeof Checkbox> = {
  title: 'Stories / Checkbox',
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

export const KitchenSink: Story = {
  render: () => (
    <Flex gap="400">
      <Flex direction="column" gap="200">
        <BodyText>Standalone</BodyText>
        <Checkbox aria-label="standalone" />
      </Flex>
      <Flex direction="column" gap="200">
        <BodyText>With label</BodyText>
        <Checkbox label="Label" />
      </Flex>
    </Flex>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Flex direction="column" gap="400">
        <BodyText>Checked: {checked ? 'true' : 'false'}</BodyText>
        <Checkbox value="1" label="One" checked={checked} onCheckedChange={c => setChecked(c)} />
      </Flex>
    );
  },
};
