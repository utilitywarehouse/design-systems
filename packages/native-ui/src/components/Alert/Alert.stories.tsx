import React from 'react';
import { Alert } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { VStack } from '../VStack';
import { VariantTitle } from '../../../docs/components';

const meta = {
  title: 'Stories / Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    colorScheme: {
      control: 'select',
      options: ['cyan', 'green', 'gold', 'red'],
      description: 'Use this valie to change the alert type and colour scheme.',
      defaultValue: 'cyan',
    },
    title: {
      control: 'text',
      description: 'Use this value to set the alert title.',
    },
    text: {
      control: 'text',
      description: 'Use this value to set the alert text.',
    },
    link: {
      control: 'text',
      description:
        'Use this value to set the alert link text. Use along with the `onPressLink` prop.',
    },
    onClose: {
      control: 'boolean',
      description: 'Use this handle the on close event. (Use a function to handle the event.)',
    },
    onPressIconButton: {
      control: 'boolean',
      description: 'Use this handle Icon Button press. (Use a function to handle the event.)',
    },
  },
  args: {
    colorScheme: 'cyan',
    title: 'Information',
    text: 'Unlock the power of knowledge with the following information.',
    link: 'Learn more',
    onClose: fn(),
    onPressIconButton: fn(),
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <VStack space="sm">
      <VariantTitle title="Info - Cyan">
        <Alert
          colorScheme="cyan"
          text="Unlock the power of knowledge with the following information."
        />
      </VariantTitle>
      <VariantTitle title="Success - Green">
        <Alert
          colorScheme="green"
          text="Boom! You did it! Please take a moment to pat yourself on the back. You've earned it!"
        />
      </VariantTitle>
      <VariantTitle title="Error - Red">
        <Alert
          colorScheme="red"
          text="Uh-oh! It looks like the matrix has glitched. Our team of tech ninjas are already on the
          case. Please hold tight while we fix the issue"
        />
      </VariantTitle>
      <VariantTitle title="Warning - Gold">
        <Alert
          colorScheme="gold"
          text="Warning: Reading the following content may cause spontaneous outbursts of 'aha!' moments"
        />
      </VariantTitle>
    </VStack>
  ),
};
