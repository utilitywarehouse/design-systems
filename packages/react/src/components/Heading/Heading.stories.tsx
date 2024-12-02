import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';
import { Flex } from '../Flex/Flex';
import * as React from 'react';

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
    color: '',
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Workshop: Story = {};

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
