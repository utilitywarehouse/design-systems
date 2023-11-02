import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextLink } from './TextLink';
import { Text } from '../../Text';
import { Flex } from '../../Flex';

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
    <Text>
      <TextLink {...args} />
    </Text>
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
            <TextLink textTransform="capitalize">{variant} TextLink</TextLink>
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
