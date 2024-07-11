import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { Box } from '../Box';
import { Flex } from '../Flex';

const meta: Meta<typeof Heading> = {
  title: 'Web UI / Typography / Heading',
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

const variants = ['displayHeading', 'h1', 'h2', 'h3', 'h4'] as const;

export const KitchenSink: Story = {
  render: () => {
    return (
      <Flex direction="column" gap={1}>
        {variants.map(variant => (
          <Heading key={variant} variant={variant}>
            Hamburgefons
          </Heading>
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
        <Heading
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
    variant: {
      options: variants,
      control: { type: 'radio' },
    },
    color: {
      options: [undefined, ...Object.keys(colorsCommon), ...Object.keys(colors)],
      control: { type: 'select' },
    },
    inverted: { control: { type: 'boolean' } },
    textTransform: {
      options: ['capitalize', 'uppercase', 'lowercase', 'none'],
      control: { type: 'radio' },
    },
  },
  args: {
    children: 'hamburgefons',
    variant: 'h2',
    color: undefined,
    textTransform: 'capitalize',
  },
};

export const HeadingVariants: Story = {
  name: 'Variants',
  render: () => {
    return (
      <Flex gap={1} direction="column">
        {variants.map(variant => (
          <Heading key={variant} variant={variant}>
            {variant}
          </Heading>
        ))}
      </Flex>
    );
  },
};

export const HeadingColour: Story = {
  name: 'Contextual Colour',
  render: () => {
    return (
      <Flex direction="column">
        <Box padding={2}>
          <Heading variant="h2">heading</Heading>
        </Box>
        <Box padding={2} background={colorsCommon.brandPrimaryPurple}>
          <Heading variant="h2">heading on brandPrimaryPurple background</Heading>
        </Box>
        <Box padding={2} background={colorsCommon.brandMidnight}>
          <Heading variant="h2">heading on brandMidnight background</Heading>
        </Box>
        <Box padding={2} background={colorsCommon.brandMidnight}>
          <Heading variant="h2" color={colorsCommon.brandPink}>
            heading on brandMidnight background with custom color
          </Heading>
        </Box>
      </Flex>
    );
  },
};
