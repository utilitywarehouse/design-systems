import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Strong } from './Strong';
import { Flex } from '../Flex/Flex';
import { BodyText } from '../BodyText/BodyText';

const textVariants = ['subtitle', 'body', 'legalNote', 'caption'] as const;

const meta: Meta<typeof Strong> = {
  title: 'Stories / Strong',
  component: Strong,
};

export default meta;
type Story = StoryObj<typeof Strong>;

export const KitchenSink: Story = {
  render: () => (
    <Flex direction="column" gap="8px">
      {textVariants.map(variant => (
        <BodyText key={variant} variant={variant}>
          The most important thing to remember is, <Strong>stay positive</Strong>.
        </BodyText>
      ))}
    </Flex>
  ),
};
