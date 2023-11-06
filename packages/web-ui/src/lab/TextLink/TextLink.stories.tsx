import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextLink } from './TextLink';
import { Text } from '../../Text';
import { Flex } from '../../Flex';
import { Box } from '../../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';

const meta: Meta<typeof TextLink> = {
  title: 'Web UI / Lab / TextLink',
  component: TextLink,
  argTypes: {
    children: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
  },
  tags: ['autodocs'],
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
        Susan Kare is an American artist and <TextLink {...args}>graphic designer</TextLink>, who
        contributed <TextLink {...args}>interface</TextLink> elements and{' '}
        <TextLink {...args}>typefaces</TextLink> for the first{' '}
        <TextLink {...args}>Apple Macintosh</TextLink> personal computer from 1983 to 1986.
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

export const TextLinkColour: Story = {
  name: 'Contextual Colour',
  render: () => {
    return (
      <Flex direction="column">
        <Box padding={2}>
          <Text variant="body">
            Text with a <TextLink>TextLink</TextLink>
          </Text>
        </Box>
        <Box padding={2} background={colorsCommon.brandPrimaryPurple}>
          <Text variant="body">
            Text with a <TextLink>TextLink</TextLink> on brandPrimaryPurple background
          </Text>
        </Box>
        <Box padding={2} background={colorsCommon.brandMidnight}>
          <Text variant="body">
            Text with a <TextLink>TextLink</TextLink> on brandMidnight background
          </Text>
        </Box>
        <Box padding={2} background={colorsCommon.brandMidnight}>
          <Text variant="body" color={colorsCommon.brandPink}>
            Text with a <TextLink>TextLink</TextLink> on brandMidnight background with custom color
          </Text>
        </Box>
      </Flex>
    );
  },
};
