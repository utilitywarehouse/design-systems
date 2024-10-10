import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

import { Button } from '../Button';
import { Flex } from '../Flex';

const meta: Meta<typeof TextField> = {
  title: 'Web UI / Components / TextField',
  component: TextField,
  argTypes: {
    status: {
      options: { neutral: 'neutral', success: 'success', error: 'error' },
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    id: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },
    removeGutterBottom: { control: { type: 'boolean' } },
  },
  args: {
    status: 'neutral',
    disabled: false,
    multiline: false,
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder',
    id: 'web-ui-textfield-example',
    removeGutterBottom: false,
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Workshop: Story = {};

export const LayoutShift: Story = {
  render: args => {
    const [error, showError] = React.useState(false);
    return (
      <Flex direction="column" gap={4} align="start">
        <Button onClick={() => showError(err => !err)}>{error ? 'Hide ' : 'Show '} error</Button>

        <Flex direction="column" gap={2} width={400}>
          <TextField
            {...args}
            status={error ? 'error' : 'neutral'}
            id="1"
            helperText={error ? 'Answer cannot be empty' : undefined}
          />
          <TextField {...args} id="3" helperText="This is some helper text" />
          <Button>Submit</Button>
        </Flex>
      </Flex>
    );
  },
};
