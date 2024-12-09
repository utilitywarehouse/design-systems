import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';
import { Flex } from '../Flex/Flex';
import * as React from 'react';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

const variants = ['displayHeading', 'h1', 'h2', 'h3', 'h4'] as const;
const weights = ['regular', 'bold'] as const;

const meta: Meta<typeof Heading> = {
  title: 'Stories / Heading',
  component: Heading,
  parameters: { layout: 'centered' },
  argTypes: {
    children: { control: { type: 'text' } },
    variant: { options: variants, control: { type: 'radio' } },
    weight: { options: weights, control: { type: 'radio' } },
  },
  args: {
    children: 'Hamburgefons',
    variant: 'h2',
    align: { mobile: 'left', tablet: 'center', desktop: 'right' },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Workshop: Story = {
  render: ({ color = undefined, ...args }) => {
    return (
      <Heading
        // @ts-expect-error story
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        color={Object.keys(colorsCommon).includes(color) ? colorsCommon[color] : colors[color]}
        {...args}
      />
    );
  },
  argTypes: {
    color: {
      options: [undefined, ...Object.keys(colorsCommon), ...Object.keys(colors)],
      control: { type: 'select' },
    },
  },
};

export const KitchenSink: Story = {
  render: () => {
    return (
      <Flex direction="column" gap="8px">
        {variants.map(variant => (
          <Heading key={variant} variant={variant}>
            Hamburgefons
          </Heading>
        ))}
      </Flex>
    );
  },
};
