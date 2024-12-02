import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { colors } from '@utilitywarehouse/colour-system';

import { Divider } from './Divider';
import { Flex } from '../Flex/Flex';
import { Heading } from '../Heading/Heading';
import { Strong } from '../Strong/Strong';
import { Box } from '../Box/Box';
import { BodyText } from '../BodyText/BodyText';

const meta: Meta<typeof Divider> = {
  title: 'Stories / Divider',
  component: Divider,
  argTypes: {
    orientation: { options: ['horizontal', 'vertical'], control: { type: 'radio' } },
    decorative: { control: { type: 'boolean' } },
    color: { control: { type: 'text' } },
  },
  args: {
    orientation: 'horizontal',
    decorative: true,
    color: '',
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Workshop: Story = {};

export const KitchenSink: Story = {
  render: () => {
    return (
      <Flex direction="column" gap="32px" width="100%" maxWidth="800px" padding="16px">
        <Flex direction="column" gap="8px" paddingInline="32px">
          <Heading variant="h4">Mobile number: 07891123456</Heading>
          <Flex gap="24px" align="center">
            <BodyText>Unlimited Tariff</BodyText>
            <Divider decorative orientation="vertical" />
            <BodyText>
              Budget control: <Strong>On</Strong>
            </BodyText>
            <Divider decorative orientation="vertical" />
            <BodyText>
              SIM number: <Strong>249320592996</Strong>
            </BodyText>
          </Flex>
        </Flex>
        <Divider />
        <Flex direction="column" gap="8px" paddingInline="32px">
          <Heading variant="h4">Mobile number: 07875123456</Heading>
          <Flex gap="24px" align="center">
            <BodyText>Value Tariff</BodyText>
            <Divider decorative orientation="vertical" />
            <BodyText>
              Budget control: <Strong>On</Strong>
            </BodyText>
            <Divider decorative orientation="vertical" />
            <BodyText>
              SIM number: <Strong>249320592996</Strong>
            </BodyText>
          </Flex>
        </Flex>
        <Divider />
        <Flex direction="column" gap="8px" paddingInline="32px">
          <Heading variant="h4">Mobile number: 07929123456</Heading>
          <Flex gap="24px" align="center">
            <BodyText>Unlimited Tariff</BodyText>
            <Divider decorative orientation="vertical" />
            <BodyText>
              Budget control: <Strong>Off</Strong>
            </BodyText>
            <Divider decorative orientation="vertical" />
            <BodyText>
              SIM number: <Strong>249320592996</Strong>
            </BodyText>
          </Flex>
        </Flex>
      </Flex>
    );
  },
};

export const CustomColor: Story = {
  render: () => {
    return (
      <Flex direction="column" gap="32px" width="800px" padding="16px">
        <Divider color={colors.pink500} />
        <BodyText>First item </BodyText>
        <Divider color={colors.pink500} />
        <BodyText>Second item </BodyText>
        <Divider color={colors.pink500} />
        <BodyText>Third item </BodyText>
        <Divider color={colors.pink500} />
      </Flex>
    );
  },
};

export const UsageOutsideFlexbox: Story = {
  render: () => (
    <Box width="100%" padding="32px">
      <Divider decorative />
      <Box height="100px">
        <Divider orientation="vertical" decorative />
      </Box>
    </Box>
  ),
};
