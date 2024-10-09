import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { FormField } from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Web UI / Components / FormField',
  component: FormField,
  argTypes: {
    children: { control: { type: 'text' } },
    size: { options: ['small', 'medium'], control: { type: 'radio' } },
  },
  args: {
    children: 'FormField',
    size: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Workshop: Story = {};
