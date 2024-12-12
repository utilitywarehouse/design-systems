import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxTile } from './CheckboxTile';
import { Flex } from '../Flex/Flex';
import { BodyText } from '../BodyText/BodyText';

const meta: Meta<typeof CheckboxTile> = {
  title: 'Web UI / Stories / CheckboxTile',
  component: CheckboxTile,
  argTypes: {
    helperText: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    disabled: { type: 'boolean' },
  },
  args: {
    label: 'Label',
    helperText: 'Helper text',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxTile>;

export const Workshop: Story = {
  render: args => (
    <Flex>
      <CheckboxTile {...args} />
    </Flex>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Flex direction="column" gap="400">
        <BodyText>Checked: {checked ? 'true' : 'false'}</BodyText>
        <CheckboxTile
          value="1"
          label="One"
          checked={checked}
          onCheckedChange={c => setChecked(c)}
        />
      </Flex>
    );
  },
};
