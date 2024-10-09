import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

import { Button } from '../Button';
import { Flex } from '../Flex';
import { Text } from '../Text';

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

export default meta;
type Story = StoryObj<typeof TextField>;

export const Workshop: Story = {};

export const LayoutShift: Story = {
  render: () => {
    const [error, showError] = React.useState(false);
    return (
      <Flex direction="column" gap={4} align="start">
        <Button onClick={() => showError(err => !err)}>{error ? 'Hide ' : 'Show '} error</Button>
        <Flex gap={6}>
          <Flex direction="column" gap={2} width={400}>
            <Text>With layout shift</Text>
            <TextField
              status={error ? 'error' : 'neutral'}
              id="1"
              helperText={error ? 'Answer cannot be empty' : undefined}
            />
            <TextField id="3" helperText="This is some helper text" />
            <Button>Submit</Button>
          </Flex>

          <Flex direction="column" gap={2} width={400}>
            <Text>With layout shift</Text>
            <TextField
              status={error ? 'error' : 'neutral'}
              id="3"
              helperText={error ? 'Answer cannot be empty' : undefined}
              legacy
            />
            <TextField id="4" legacy helperText="This is some helper text" />
            <Button>Submit</Button>
          </Flex>
        </Flex>
      </Flex>
    );
  },
};
