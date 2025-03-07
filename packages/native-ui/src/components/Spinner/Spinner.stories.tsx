import React from 'react';
import { Spinner } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { VStack } from '../VStack';
import { VariantTitle } from '../../../docs/components';
import { colors } from '@utilitywarehouse/colour-system';

const meta = {
  title: 'Stories / Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      options: [...Object.keys(colors).map(color => `$${color}`)],
      control: 'select',
      description: 'Color of the spinner',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the spinner',
    },
  },
  args: {
    size: 'md',
    color: '$purple800',
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: args => (
    <VStack space="md">
      <VariantTitle title="x-small - xs">
        <Spinner {...args} size="xs" />
      </VariantTitle>
      <VariantTitle title="small - sm">
        <Spinner {...args} size="sm" />
      </VariantTitle>
      <VariantTitle title="medium - md">
        <Spinner {...args} size="md" />
      </VariantTitle>
      <VariantTitle title="large - lg">
        <Spinner {...args} size="lg" />
      </VariantTitle>
    </VStack>
  ),
};
