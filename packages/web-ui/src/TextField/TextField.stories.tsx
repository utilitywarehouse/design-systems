import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Web UI / Components / TextField',
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Workshop: Story = {
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
    placeholder: 'Placeholder',
    id: 'web-ui-textfield-example',
  },
};
