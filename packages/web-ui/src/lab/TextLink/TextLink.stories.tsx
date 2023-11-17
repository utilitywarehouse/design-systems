import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextLink } from './TextLink';
import { Text } from '../../Text';
import { Flex } from '../../Flex';
import { Box } from '../../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { styled } from '../../theme';

const meta: Meta<typeof TextLink> = {
  title: 'Web UI / Lab / TextLink',
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
        <TextLink {...args}>minimalist</TextLink> style. Martin's art was characterized by serene
        compositions featuring <TextLink {...args}>grids and lines</TextLink>. Martin's minimalist
        approach conveyed tranquility and <TextLink {...args}>spirituality</TextLink>, and her
        paintings often carried positive names reflective of her{' '}
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

export const TextLinkColour: Story = {
  name: 'Contextual Colour',
  args: { href: '#' },
  render: args => {
    const StyledTextLink = styled(TextLink)({
      '--text-link-color-default': colorsCommon.brandPink,
      '--text-link-color-active': colorsCommon.brandPink,
      '--text-link-color-visited': colorsCommon.brandPink,
    });
    return (
      <Flex direction="column">
        <Box padding={2}>
          <Text variant="body">
            Text with a <TextLink {...args}>TextLink</TextLink>
          </Text>
        </Box>
        <Box padding={2} background={colorsCommon.brandPrimaryPurple}>
          <Text variant="body">
            Text with a <TextLink {...args}>TextLink</TextLink> on brandPrimaryPurple background
          </Text>
        </Box>
        <Box padding={2} background={colorsCommon.brandMidnight}>
          <Text variant="body">
            Text with a <TextLink {...args}>TextLink</TextLink> on brandMidnight background
          </Text>
        </Box>
        <Box padding={2} background={colorsCommon.brandMidnight}>
          <Text variant="body" color={colorsCommon.brandPink}>
            Text with a <StyledTextLink {...args}>TextLink</StyledTextLink> on brandMidnight
            background with custom color
          </Text>
        </Box>
      </Flex>
    );
  },
};
