import type { Meta, StoryObj } from '@storybook/react';
import { FieldLabel } from './FieldLabel';
import { Box } from '../Box';

const meta: Meta<typeof FieldLabel> = {
  title: 'Web UI / Components / FieldLabel',
  component: FieldLabel,
};

export default meta;
type Story = StoryObj<typeof FieldLabel>;

export const Workshop: Story = {
  render: args => {
    return (
      <Box bgcolor="white" padding={4}>
        <FieldLabel {...args} />
      </Box>
    );
  },
  argTypes: {
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    disabled: false,
    children: 'Label',
  },
};
