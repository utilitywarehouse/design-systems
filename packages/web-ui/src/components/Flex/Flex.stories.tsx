import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { colorsCommon } from '@utilitywarehouse/colour-system';

import { Flex } from './Flex';

import { Box } from '../Box';
import { Divider } from '../Divider';
import { Text } from '../Text';

const meta: Meta<typeof Flex> = {
  title: 'Web UI / Stories / Flex',
  component: Flex,
  argTypes: {
    gap: { control: { type: 'number' } },
    direction: {
      control: { type: 'radio' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    wrap: { control: { type: 'radio' }, options: ['nowrap', 'wrap', 'wrap-reverse'] },
    align: {
      control: { type: 'radio' },
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: { type: 'radio' },
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
    },
  },
  args: {
    component: 'div',
    direction: 'column',
    gap: 4,
    align: 'center',
    justify: 'center',
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Workshop: Story = {
  render: args => {
    return (
      <Flex {...args}>
        <Box background={colorsCommon.brandPrimaryPurple} padding={2} width={300} />
        <Box background={colorsCommon.brandPrimaryPurple} padding={2} width={300} />
        <Box background={colorsCommon.brandPrimaryPurple} padding={2} width={300} />
      </Flex>
    );
  },
  args: {
    width: 600,
    height: 600,
    border: '1px solid',
    borderColor: colorsCommon.brandPrimaryPurple,
  },
};

export const Stack: Story = {
  name: 'Using as Stack',
  render: args => {
    return (
      <Box p={1}>
        <Flex {...args}>
          {[
            { px: 2, py: 4 },
            { px: 6, py: 8 },
            { px: 12, py: 16 },
          ].map((padding, i) => (
            <>
              <Box
                px={padding.px}
                py={padding.py}
                background={colorsCommon.brandPrimaryPurple}
                borderRadius="8px"
              >
                <Text component="span" variant="body">
                  Item {i + 1}
                </Text>
              </Box>
              {i < 2 ? (
                <Divider
                  orientation={
                    typeof args.direction === 'string' && args?.direction?.includes('row')
                      ? 'vertical'
                      : 'horizontal'
                  }
                />
              ) : null}
            </>
          ))}
        </Flex>
      </Box>
    );
  },
};
