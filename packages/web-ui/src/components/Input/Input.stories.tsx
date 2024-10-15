import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { EmailMediumIcon } from '@utilitywarehouse/react-icons';

import { Input } from './Input';
import { InputSlot } from './InputSlot';

const meta: Meta<typeof Input> = {
  title: 'Web UI / Components / Input',
  component: Input,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Workshop: Story = {};

export const WithIcons: Story = {
  render: () => (
    <Input>
      <InputSlot placement="prefix">
        <EmailMediumIcon />
      </InputSlot>
    </Input>
  ),
};
