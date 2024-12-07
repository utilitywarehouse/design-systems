import type { Meta, StoryObj } from '@storybook/react';

import { BodyText } from './BodyText';
import { Flex } from '../Flex/Flex';
import * as React from 'react';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

const variants = ['subtitle', 'body', 'legalNote', 'caption'] as const;
const weights = ['regular', 'medium', 'semibold'] as const;

const meta: Meta<typeof BodyText> = {
  title: 'Stories / BodyText',
  component: BodyText,
  parameters: { layout: 'centered' },
  argTypes: {
    children: { control: { type: 'text' } },
    as: { options: ['span', 'p', 'div'], control: { type: 'radio' } },
    variant: { options: variants, control: { type: 'radio' } },
    weight: { options: weights, control: { type: 'radio' } },
    truncate: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Hamburgefons',
    variant: 'body',
    weight: { mobile: 'regular', tablet: 'medium', desktop: 'semibold' },
    align: { mobile: 'left', tablet: 'center', desktop: 'right' },
    truncate: false,
    color: '',
  },
};

export default meta;
type Story = StoryObj<typeof BodyText>;

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Flex direction="column" gap="8px">
        {variants.map(variant => (
          <BodyText key={variant} variant={variant}>
            Hamburgefons
          </BodyText>
        ))}
      </Flex>
    );
  },
};

export const Workshop: Story = {
  render: ({ color = undefined, ...args }) => {
    return (
      <Flex padding="32px" backgroundColor={colors.grey50} align="center" justify="center">
        <BodyText
          // @ts-expect-error story
          color={Object.keys(colorsCommon).includes(color) ? colorsCommon[color] : colors[color]}
          {...args}
        />
      </Flex>
    );
  },
  argTypes: {
    color: {
      options: [undefined, ...Object.keys(colorsCommon), ...Object.keys(colors)],
      control: { type: 'select' },
    },
  },
  args: {
    color: undefined,
  },
};

export const TextVariants: Story = {
  name: 'Variants',
  render: () => {
    return (
      <Flex direction="column" gap="8px">
        {variants.map(variant => (
          <BodyText key={variant} variant={variant}>
            {variant}
          </BodyText>
        ))}
      </Flex>
    );
  },
};

export const TextTruncate: Story = {
  name: 'Truncate',
  render: args => {
    return (
      <Flex direction="column" gap="8px" width="200px">
        {variants.map(variant => (
          <BodyText key={variant} {...args} variant={variant}>
            the quick brown fox jumped over the lazy dog.
          </BodyText>
        ))}
      </Flex>
    );
  },
  args: {
    truncate: true,
  },
};
