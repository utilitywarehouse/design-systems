import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { ChevronRightMediumIcon, OpenMediumIcon } from '@utilitywarehouse/react-icons';

import { TextLink } from './TextLink';

import { Box } from '../Box';
import { Flex } from '../Flex';
import { Text } from '../Text';

const meta: Meta<typeof TextLink> = {
  title: 'Web UI / Stories / TextLink',
  component: TextLink,
  argTypes: {
    children: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
    inverted: { control: { type: 'boolean' } },
    textTransform: {
      options: ['capitalize', 'uppercase', 'lowercase', 'none'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextLink>;

const variants = ['subtitle', 'body', 'legalNote', 'caption'] as const;

export const Workshop: Story = {
  render: args => (
    <Flex
      direction="column"
      gap={4}
      width={500}
      p={4}
      bgcolor={args.inverted ? colors.grey900 : colors.grey50}
      align="center"
      justify="center"
    >
      <Text inverted={args.inverted}>
        <TextLink {...args} />
      </Text>
      <Text inverted={args.inverted}>
        Agnes Martin was an American <TextLink {...args}>abstract painter</TextLink> known for her{' '}
        <TextLink {...args}>minimalist</TextLink> style. Martin&apos;s art was characterized by
        serene compositions featuring <TextLink {...args}>grids and lines</TextLink>. Martin&apos;s
        minimalist approach conveyed tranquility and <TextLink {...args}>spirituality</TextLink>,
        and her paintings often carried positive names reflective of her{' '}
        <TextLink {...args}>philosophy</TextLink>.
      </Text>
    </Flex>
  ),
  args: {
    children: 'TextLink',
    href: '#',
  },
};

export const KitchenSink: Story = {
  render: () => {
    return (
      <Flex direction="column" gap={1}>
        {variants.map(variant => (
          <Text key={variant} variant={variant}>
            <TextLink textTransform="capitalize" href="#">
              {variant} TextLink
            </TextLink>
          </Text>
        ))}
      </Flex>
    );
  },
};

export const WithinText: Story = {
  name: 'In a block of text',
  render: () => {
    return (
      <Flex direction="column" gap={1}>
        {variants.map(variant => (
          <Text key={variant} variant={variant}>
            This is the {variant} text style, and it contains{' '}
            <TextLink href="#">an embedded link</TextLink> within this text.
          </Text>
        ))}
      </Flex>
    );
  },
};

export const WithIcons: Story = {
  render: args => (
    <Flex gap={6}>
      <TextLink {...args}>
        Learn More
        <ChevronRightMediumIcon />
      </TextLink>
      <TextLink {...args}>
        Open in a new tab
        <OpenMediumIcon />
      </TextLink>
    </Flex>
  ),
};

export const TextLinkColour: Story = {
  name: 'Contextual Colour',
  args: { href: '#' },
  render: args => {
    return (
      <Flex direction="column">
        <Box padding={2}>
          <Text variant="body">
            Text with a <TextLink {...args}>TextLink</TextLink>.
          </Text>
        </Box>
        <Box padding={2} background={colorsCommon.brandPrimaryPurple}>
          <Text variant="body">
            Text with a <TextLink {...args}>TextLink</TextLink> on brandPrimaryPurple background.
          </Text>
        </Box>
        <Box padding={2} background={colorsCommon.brandMidnight}>
          <Text variant="body">
            Text with a <TextLink {...args}>TextLink</TextLink> on brandMidnight background.
          </Text>
        </Box>
        <Box padding={2} background={colorsCommon.brandMidnight}>
          <Text variant="body" color={colorsCommon.brandPink}>
            Text with a{' '}
            <TextLink {...args} color="inherit">
              TextLink
            </TextLink>{' '}
            on brandMidnight background with inherited colour.
          </Text>
        </Box>
        <Box padding={2}>
          <Text variant="body">
            Text with a{' '}
            <TextLink {...args} color={colors.green500}>
              TextLink
            </TextLink>{' '}
            on brandWhite background with custom colour.
          </Text>
        </Box>
      </Flex>
    );
  },
};

export const AsButton: Story = {
  render: () => (
    <Flex direction="column" gap={2} align="start">
      <TextLink asChild>
        <button onClick={() => alert('Hello world!')}>
          View benefits
          <ChevronRightMediumIcon />
        </button>
      </TextLink>
    </Flex>
  ),
};

export const LengthyContent: Story = {
  render: args => (
    <Flex width={800}>
      <Text>
        To limit spend on international calls, turn on Budget Control and then{' '}
        <TextLink {...args}>{args.children}</TextLink>
      </Text>
    </Flex>
  ),
  args: { children: 'follow our handy guide to set your International call cap.' },
};
