import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { Flex } from '../Flex';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Strong } from '../Strong';
import { colors } from '@utilitywarehouse/colour-system';
import { Box } from '../Box';

const meta: Meta<typeof Divider> = {
  title: 'Web UI / Components / Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const KitchenSink: Story = {
  render: () => {
    return (
      <Flex direction="column" gap={4} width="100%" maxWidth={800} padding={2}>
        <Flex direction="column" gap={1} paddingX={4}>
          <Heading variant="h4">Mobile number: 07891123456</Heading>
          <Flex gap={3} align="center">
            <Text textTransform="capitalize">unlimited tariff</Text>
            <Divider decorative orientation="vertical" />
            <Text>
              Budget control: <Strong textTransform="capitalize">on</Strong>
            </Text>
            <Divider decorative orientation="vertical" />
            <Text>
              SIM number: <Strong>249320592996</Strong>
            </Text>
          </Flex>
        </Flex>
        <Divider />
        <Flex direction="column" gap={1} paddingX={4}>
          <Heading variant="h4">Mobile number: 07875123456</Heading>
          <Flex gap={3} align="center">
            <Text>Value Tariff</Text>
            <Divider decorative orientation="vertical" />
            <Text>
              Budget control: <Strong>On</Strong>
            </Text>
            <Divider decorative orientation="vertical" />
            <Text>
              SIM number: <Strong>249320592996</Strong>
            </Text>
          </Flex>
        </Flex>
        <Divider />
        <Flex direction="column" gap={1} paddingX={4}>
          <Heading variant="h4">Mobile number: 07929123456</Heading>
          <Flex gap={3} align="center">
            <Text>Unlimited Tariff</Text>
            <Divider decorative orientation="vertical" />
            <Text>
              Budget control: <Strong>Off</Strong>
            </Text>
            <Divider decorative orientation="vertical" />
            <Text>
              SIM number: <Strong>249320592996</Strong>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  },
};

export const CustomColor: Story = {
  render: () => {
    return (
      <Flex direction="column" gap={4} width={800} padding={2}>
        <Divider color={colors.pink500} />
        <Text>First item </Text>
        <Divider color={colors.pink500} />
        <Text>Second item </Text>
        <Divider color={colors.pink500} />
        <Text>Third item </Text>
        <Divider color={colors.pink500} />
      </Flex>
    );
  },
};

export const UsageOutsideFlexbox: Story = {
  render: () => (
    <Box width="100%" p={4}>
      <Divider decorative />
      <Box height={100}>
        <Divider orientation="vertical" decorative />
      </Box>
    </Box>
  ),
};
