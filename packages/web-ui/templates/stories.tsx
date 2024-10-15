import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { COMPONENT_NAME } from './COMPONENT_NAME';

const meta: Meta<typeof COMPONENT_NAME> = {
  title: 'Web UI / Components / COMPONENT_NAME',
  component: COMPONENT_NAME,
  argTypes: {
    children: { control: { type: 'text' } },
    size: { options: ['small', 'medium'], control: { type: 'radio' } },
  },
  args: {
    children: 'COMPONENT_NAME',
    size: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof COMPONENT_NAME>;

export const Workshop: Story = {};
