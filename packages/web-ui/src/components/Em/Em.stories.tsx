import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Em } from './Em';

import { Flex } from '../Flex';
import { Text } from '../Text';

const textVariants = ['subtitle', 'body', 'legalNote', 'caption'] as const;

const meta: Meta<typeof Em> = {
  title: 'Web UI / Stories / Em',
  component: Em,
};

export default meta;
type Story = StoryObj<typeof Em>;

export const KitchenSink: Story = {
  render: () => (
    <Flex direction="column" gap={1}>
      {textVariants.map(variant => (
        <Text key={variant} variant={variant}>
          We <Em>had</Em> to do something about it.
        </Text>
      ))}
    </Flex>
  ),
};
