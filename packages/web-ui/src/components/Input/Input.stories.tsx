import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Web UI / Components / Input',
  component: Input,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Workshop: Story = {};
