import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

import { Text } from './Text';

import { Box } from '../Box';
import { Flex } from '../Flex';

const variants = ['subtitle', 'body', 'legalNote', 'caption'] as const;

const meta: Meta<typeof Text> = {
  title: 'Web UI / Typography / Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Flex direction="column" gap={1}>
        {variants.map(variant => (
          <Text key={variant} variant={variant}>
            Hamburgefons
          </Text>
        ))}
      </Flex>
    );
  },
};

export const Workshop: Story = {
  render: ({ color = undefined, ...args }) => {
    return (
      <Flex
        p={4}
        bgcolor={args.inverted ? colors.grey900 : colors.grey50}
        align="center"
        justify="center"
      >
        <Text
          // @ts-expect-error story
          color={Object.keys(colorsCommon).includes(color) ? colorsCommon[color] : colors[color]}
          {...args}
        />
      </Flex>
    );
  },
  argTypes: {
    children: { control: { type: 'text' } },
    component: { control: { type: 'text' } },
    variant: { options: variants, control: { type: 'radio' } },
    color: {
      options: [undefined, ...Object.keys(colorsCommon), ...Object.keys(colors)],
      control: { type: 'select' },
    },
    inverted: { control: { type: 'boolean' } },
    fontWeight: {
      options: ['regular', 'medium', 'semibold'],
      control: { type: 'radio' },
    },
    textTransform: {
      options: ['capitalize', 'uppercase', 'lowercase', 'none'],
      control: { type: 'radio' },
    },
    bold: { control: { type: 'boolean' } },
    align: { control: { type: 'text' } },
    noWrap: { control: { type: 'boolean' } },
  },
  args: {
    children: 'hamburgefons',
    variant: 'body',
    component: 'span',
    color: undefined,
    bold: false,
    textTransform: 'capitalize',
  },
};

export const TextVariants: Story = {
  name: 'Variants',
  render: () => {
    return (
      <Flex direction="column" gap={1}>
        {variants.map(variant => (
          <Text key={variant} variant={variant}>
            {variant}
          </Text>
        ))}
      </Flex>
    );
  },
};

export const TextColour: Story = {
  name: 'Contextual Colour',
  render: () => {
    return (
      <Flex direction="column">
        <Box padding={2}>
          <Text variant="subtitle">text</Text>
        </Box>
        <Box padding={2} background={colorsCommon.brandPrimaryPurple}>
          <Text variant="subtitle">text on brandPrimaryPurple background</Text>
        </Box>
        <Box padding={2} background={colorsCommon.brandMidnight}>
          <Text variant="subtitle">text on brandMidnight background</Text>
        </Box>
        <Box padding={2} background={colorsCommon.brandMidnight}>
          <Text variant="subtitle" color={colorsCommon.brandPink}>
            text on brandMidnight background with custom color
          </Text>
        </Box>
      </Flex>
    );
  },
};

export const TextNoWrap: Story = {
  name: 'No Wrap',
  render: args => {
    return (
      <Flex direction="column" gap={1} width={200}>
        <Text variant="subtitle" {...args}>
          the quick brown fox jumped over the lazy dog.
        </Text>
        <Text variant="body" {...args}>
          the quick brown fox jumped over the lazy dog.
        </Text>
        <Text variant="legalNote" {...args}>
          the quick brown fox jumped over the lazy dog.
        </Text>
        <Text variant="caption" {...args}>
          the quick brown fox jumped over the lazy dog.
        </Text>
      </Flex>
    );
  },
  argTypes: { noWrap: { control: { type: 'boolean' } } },
  args: { noWrap: true },
};
