import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextLink } from './TextLink';
import { Text } from '../../Text';
import { Flex } from '../../Flex';
import { Box } from '../../Box';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import {
  ChevronLeftMediumIcon,
  ChevronRightMediumIcon,
  OpenMediumIcon,
} from '@utilitywarehouse/react-icons';

const meta: Meta<typeof TextLink> = {
  title: 'Web UI / Lab / Link / TextLink',
  component: TextLink,
  argTypes: {
    children: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
  },
};

export default meta;
type Story = StoryObj<typeof TextLink>;

const variants = ['subtitle', 'body', 'legalNote', 'caption'] as const;

export const Workshop: Story = {
  render: args => (
    <Flex direction="column" gap={4} width={500}>
      <Text>
        <TextLink {...args} />
      </Text>
      <Text>
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
      <TextLink asChild color={colors.grey900}>
        <button onClick={() => alert('Hello world!')}>
          Custom color
          <ChevronRightMediumIcon />
        </button>
      </TextLink>
    </Flex>
  ),
};
