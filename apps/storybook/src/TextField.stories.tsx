import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Background, TextField, TextFieldProps } from 'uw-web-ui';

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
    id: 'uw-web-ui-textfield-example',
  },
} as Meta;

export const TextfieldStory: Story<TextFieldProps> = args => {
  return (
    <Background
      backgroundColor="white"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingY: 6,
        paddingX: 4,
      }}
    >
      <TextField {...args} />
    </Background>
  );
};

TextfieldStory.storyName = 'TextField';
