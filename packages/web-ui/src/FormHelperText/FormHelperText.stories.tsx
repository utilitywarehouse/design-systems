import type { Meta, StoryObj } from '@storybook/react';
import { FormHelperText } from './FormHelperText';
import { Box } from '../Box';

const meta: Meta<typeof FormHelperText> = {
  title: 'Components/FormHelperText',
  component: FormHelperText,
};

export default meta;
type Story = StoryObj<typeof FormHelperText>;

export const Workshop: Story = {
  render: args => {
    return (
      <Box background="white" padding={4}>
        <FormHelperText {...args} />
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
