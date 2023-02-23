import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../Box';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Workshop: Story = {
  render: args => {
    return (
      <Box background="white" display="flex" justifyContent="center" px={6} py={4}>
        <TextField {...args} />
      </Box>
    );
  },
  argTypes: {
    status: {
      options: {
        neutral: 'neutral',
        success: 'success',
        error: 'error',
      },
      control: {
        type: 'radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    id: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    helperText: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    status: 'neutral',
    disabled: false,
    multiline: false,
    label: 'Label',
    helperText: 'Helper text',
    placeholder: '',
    id: 'web-ui-textfield-example',
  },
};
