import React from 'react';
import { Badge } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { VStack } from '../VStack';
import { VariantTitle } from '../../../docs/components';
import { HStack } from '../HStack';

const meta = {
  title: 'Stories / Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    colorScheme: {
      control: 'select',
      options: ['cyan', 'red', 'green', 'gold', 'grey'],
    },
    borderless: {
      control: 'boolean',
    },
    strong: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['large', 'small'],
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'New Feature',
    strong: false,
    borderless: false,
    colorScheme: 'cyan',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <HStack space="sm">
      <VStack space="sm">
        <VariantTitle title="cyan">
          <Badge colorScheme="cyan">Cyan</Badge>
        </VariantTitle>
        <VariantTitle title="gold">
          <Badge colorScheme="gold">Gold</Badge>
        </VariantTitle>
        <VariantTitle title="green">
          <Badge colorScheme="green">Green</Badge>
        </VariantTitle>
        <VariantTitle title="grey">
          <Badge colorScheme="grey">Grey</Badge>
        </VariantTitle>
        <VariantTitle title="red">
          <Badge colorScheme="red">Red</Badge>
        </VariantTitle>
      </VStack>
      <VStack space="sm">
        <VariantTitle title="cyan strong">
          <Badge colorScheme="cyan" strong>
            Cyan Strong
          </Badge>
        </VariantTitle>
        <VariantTitle title="gold strong">
          <Badge colorScheme="gold" strong>
            Gold Strong
          </Badge>
        </VariantTitle>
        <VariantTitle title="green strong">
          <Badge colorScheme="green" strong>
            Green Strong
          </Badge>
        </VariantTitle>
        <VariantTitle title="grey strong">
          <Badge colorScheme="grey" strong>
            Grey Strong
          </Badge>
        </VariantTitle>
        <VariantTitle title="red strong">
          <Badge colorScheme="red" strong>
            Red Strong
          </Badge>
        </VariantTitle>
      </VStack>
    </HStack>
  ),
};
