import type { Meta, StoryObj } from '@storybook/react';
import { colors, borderRadius } from '@utilitywarehouse/customer-ui-design-tokens';
import { backgroundColors } from '../types';
import Text from '../Text';
import Stack from '../Stack';
import Heading from '../Heading';
import Box from './Box';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    background: {
      options: backgroundColors,
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Workshop: Story = {
  render: args => {
    const hexValue = args.background ? (colors as { [key: string]: string })[args.background] : '';
    return (
      <Box {...args}>
        {args.children ? (
          args.children
        ) : (
          <Heading component="h2" variant="h2">
            {args.background} ({hexValue})
          </Heading>
        )}
      </Box>
    );
  },
  args: {
    component: 'div',
    children: '',
    background: 'white',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.medium,
  },
};

export const Backgrounds = {
  argTypes: { background: { table: { disable: true } } },
  render: () => (
    <Stack spacing={0}>
      <Box background="white" padding={2}>
        <Text variant="body" component="span">
          Text on neutral background
        </Text>
      </Box>
      <Box background="whiteOwl" padding={2}>
        <Text variant="body" component="span">
          Text on neutral background
        </Text>
      </Box>
      <Box background="lightTint" padding={2}>
        <Text variant="body" component="span">
          Text on neutral background
        </Text>
      </Box>
      <Box background="purple" padding={2}>
        <Text variant="body" component="span">
          Text on inverse background
        </Text>
      </Box>
      <Box background="midnight" padding={2}>
        <Text variant="body" component="span">
          Text on inverse background
        </Text>
      </Box>
    </Stack>
  ),
};
