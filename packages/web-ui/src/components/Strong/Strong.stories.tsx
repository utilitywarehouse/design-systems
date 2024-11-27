import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Strong } from './Strong';

import { Flex } from '../Flex';
import { Text } from '../Text';

const textVariants = ['subtitle', 'body', 'legalNote', 'caption'] as const;

const meta: Meta<typeof Strong> = {
  title: 'Web UI / Stories / Strong',
  component: Strong,
};

export default meta;
type Story = StoryObj<typeof Strong>;

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Flex direction="column" gap={1}>
        {textVariants.map(variant => (
          <Text key={variant} variant={variant}>
            The most important thing to remember is, <Strong>stay positive</Strong>.
          </Text>
        ))}
      </Flex>
    );
  },
};
