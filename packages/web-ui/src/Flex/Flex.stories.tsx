import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { Box } from '../Box';
import { Text } from '../Text';

const meta: Meta<typeof Flex> = {
  title: 'Web UI / Components / Flex',
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
    const sx = {
      background: colorsCommon.brandPrimaryPurple,
      border: `1px solid ${colorsCommon.brandPrimaryPurple}`,
      borderRadius: '8px',
    };
    return (
      <Box sx={{ padding: 1 }}>
        <Flex {...args}>
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
        </Flex>
      </Box>
    );
  },
};
