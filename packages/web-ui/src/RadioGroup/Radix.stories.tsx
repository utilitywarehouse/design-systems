import type { Meta, StoryObj } from '@storybook/react';
import { Radix } from './Radix';
import { Box } from '../Box';
import { Stack } from '../Stack';

const meta: Meta<typeof Radix> = {
  title: 'Web UI / Components / Radix',
  component: Radix,
};

export default meta;
type Story = StoryObj<typeof Radix>;

export const RadioStory: Story = {
  name: 'Radix',
  render: () => {
    return (
      <Box bgcolor="white" padding={4}>
        <Stack spacing={4}>
          <Radix />
        </Stack>
      </Box>
    );
  },
};
