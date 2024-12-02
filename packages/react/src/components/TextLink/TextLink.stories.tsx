import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { colors } from '@utilitywarehouse/colour-system';
import { ChevronRightMediumIcon, OpenMediumIcon } from '@utilitywarehouse/react-icons';

import { TextLink } from './TextLink';
import { Flex } from '../Flex/Flex';
import { BodyText } from '../BodyText/BodyText';

const meta: Meta<typeof TextLink> = {
  title: 'Stories / TextLink',
  component: TextLink,
  argTypes: {
    children: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
    color: { control: { type: 'text' } },
  },
};

export default meta;
type Story = StoryObj<typeof TextLink>;

const variants = ['subtitle', 'body', 'legalNote', 'caption'] as const;

export const Workshop: Story = {
  render: args => (
    <Flex
      direction="column"
      gap="32px"
      width="500px"
      padding="32px"
      backgroundColor={colors.grey50}
      align="center"
      justify="center"
    >
      <BodyText>
        <TextLink {...args} />
      </BodyText>
      <BodyText>
        Agnes Martin was an American <TextLink {...args}>abstract painter</TextLink> known for her{' '}
        <TextLink {...args}>minimalist</TextLink> style. Martin&apos;s art was characterized by
        serene compositions featuring <TextLink {...args}>grids and lines</TextLink>. Martin&apos;s
        minimalist approach conveyed tranquility and <TextLink {...args}>spirituality</TextLink>,
        and her paintings often carried positive names reflective of her{' '}
        <TextLink {...args}>philosophy</TextLink>.
      </BodyText>
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
      <Flex direction="column" gap="8px">
        {variants.map(variant => (
          <BodyText key={variant} variant={variant}>
            <TextLink href="#" style={{ textTransform: 'capitalize' }}>
              {variant} TextLink
            </TextLink>
          </BodyText>
        ))}
      </Flex>
    );
  },
};

export const WithinText: Story = {
  name: 'In a block of text',
  render: () => {
    return (
      <Flex direction="column" gap="8px">
        {variants.map(variant => (
          <BodyText key={variant} variant={variant}>
            This is the {variant} text style, and it contains{' '}
            <TextLink href="#">an embedded link</TextLink> within this text.
          </BodyText>
        ))}
      </Flex>
    );
  },
};

export const WithIcons: Story = {
  render: args => (
    <Flex gap="48px">
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

export const AsButton: Story = {
  render: () => (
    <Flex direction="column" gap="16px" align="start">
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
    <Flex width="800px">
      <BodyText>
        To limit spend on international calls, turn on Budget Control and then{' '}
        <TextLink {...args}>{args.children}</TextLink>.
      </BodyText>
    </Flex>
  ),
  args: { children: 'follow our handy guide to set your International call cap' },
};
