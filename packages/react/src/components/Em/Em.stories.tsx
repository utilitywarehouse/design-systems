import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Em } from './Em';
import { Flex } from '../Flex/Flex';
import { BodyText } from '../BodyText/BodyText';

const textVariants = ['subtitle', 'body', 'legalNote', 'caption'] as const;

const meta: Meta<typeof Em> = {
  title: 'Stories / Em',
  component: Em,
};

export default meta;
type Story = StoryObj<typeof Em>;

export const KitchenSink: Story = {
  render: () => (
    <Flex direction="column" gap="8px">
      {textVariants.map(variant => (
        <BodyText key={variant} variant={variant}>
          We <Em>had</Em> to do something about it.
        </BodyText>
      ))}
    </Flex>
  ),
};
