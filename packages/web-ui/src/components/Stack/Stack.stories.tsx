import * as React from 'react';

import Divider from '@mui/material/Divider';
import type { Meta, StoryObj } from '@storybook/react';

import { colorsCommon } from '@utilitywarehouse/colour-system';

import { Box } from '../Box';
import { Stack } from '../Stack';
import { Text } from '../Text';

const meta: Meta<typeof Stack> = {
  title: 'Web UI / Stories / Stack',
  component: Stack,
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Workshop: Story = {
  render: args => {
    const sx = {
      background: colorsCommon.brandPrimaryPurple,
      border: `1px solid ${colorsCommon.brandPrimaryPurple}`,
      borderRadius: '8px',
    };
    return (
      <Box sx={{ padding: 1 }}>
        <Stack
          {...args}
          divider={
            args.divider ? (
              <Divider
                orientation={(args.direction as string).includes('row') ? 'vertical' : 'horizontal'}
                flexItem
              />
            ) : null
          }
        >
          <Box px={2} py={4} {...sx}>
            <Text component="span" variant="body">
              Item 1
            </Text>
          </Box>
          <Box px={6} py={8} {...sx}>
            <Text component="span" variant="body">
              Item 2
            </Text>
          </Box>
          <Box px={12} py={16} {...sx}>
            <Text component="span" variant="body">
              Item 3
            </Text>
          </Box>
        </Stack>
      </Box>
    );
  },
  argTypes: {
    spacing: {
      control: {
        type: 'number',
      },
    },
    direction: {
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      control: {
        type: 'radio',
      },
    },
    alignItems: {
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      control: {
        type: 'radio',
      },
    },
    justifyContent: {
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      control: {
        type: 'radio',
      },
    },
  },
  args: {
    spacing: 1,
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    divider: false,
  },
};
