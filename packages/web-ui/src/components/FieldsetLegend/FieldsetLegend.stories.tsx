import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { FieldsetLegend } from './FieldsetLegend';

import { Box } from '../Box';

const meta: Meta<typeof FieldsetLegend> = {
  title: 'Web UI / Stories / FieldsetLegend',
  component: FieldsetLegend,
};

export default meta;
type Story = StoryObj<typeof FieldsetLegend>;

export const Workshop: Story = {
  argTypes: {
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    disabled: false,
    children: 'Fieldset legend',
  },
};

export const LongLegend: Story = {
  render: args => {
    return (
      <Box width={300}>
        <FieldsetLegend {...args} />
      </Box>
    );
  },
  args: {
    children: 'This is a very long fieldset legend and so it should wrap over more than one line',
  },
};
