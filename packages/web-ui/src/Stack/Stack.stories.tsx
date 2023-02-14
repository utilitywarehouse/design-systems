import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Stack from './Stack';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import Box from '../Box';
import { Text } from '../Typography';
import { Divider } from '@mui/material';

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: {
        type: 'number',
      },
    },
    direction: {
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      control: { type: 'radio' },
    },
    alignItems: {
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      control: { type: 'radio' },
    },
    justifyContent: {
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evently',
      ],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const props = {
  border: `1px solid ${colors.purple}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const Workshop: Story = {
  render: args => {
    return (
      <Box>
        <Stack {...args}>
          <Box background="purple" px={2} py={4} {...props}>
            <Text component="div" variant="body">
              Item 1
            </Text>
          </Box>
          <Box background="purple" px={6} py={8} {...props}>
            <Text component="div" variant="body">
              Item 2
            </Text>
          </Box>
          <Box background="purple" px={12} py={16} {...props}>
            <Text component="div" variant="body">
              Item 3
            </Text>
          </Box>
        </Stack>
      </Box>
    );
  },
  args: {
    padding: 1,
    spacing: 2,
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
export const DividerStory: Story = {
  name: 'Example with Divider',
  render: args => {
    return (
      <Box>
        <Stack
          {...args}
          divider={
            <Divider
              orientation={(args.direction as string).includes('row') ? 'vertical' : 'horizontal'}
              flexItem
            />
          }
        >
          <Box background="purple" px={2} py={4} {...props}>
            <Text component="div" variant="body">
              Item 1
            </Text>
          </Box>
          <Box background="purple" px={6} py={8} {...props}>
            <Text component="div" variant="body">
              Item 2
            </Text>
          </Box>
          <Box background="purple" px={12} py={16} {...props}>
            <Text component="div" variant="body">
              Item 3
            </Text>
          </Box>
        </Stack>
      </Box>
    );
  },
  args: {
    padding: 1,
    spacing: 2,
    direction: 'column',
  },
};
