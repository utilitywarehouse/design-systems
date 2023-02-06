import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box, TextField, TextFieldProps } from '@utilitywarehouse/web-ui';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    forwardedRef: { table: { disable: true } },
    status: {
      control: {
        type: 'radio',
        options: {
          neutral: 'neutral',
          success: 'success',
          error: 'error',
        },
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
} as Meta;

export const TextfieldStory: Story<TextFieldProps> = args => {
  return (
    <Box background="white" display="flex" justifyContent="center" px={6} py={4}>
      <TextField {...args} />
    </Box>
  );
};

TextfieldStory.storyName = 'TextField';
