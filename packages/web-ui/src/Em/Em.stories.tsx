import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text';
import { Flex } from '../Flex';
import { Em } from './Em';

const textVariants = ['subtitle', 'body', 'legalNote', 'caption'] as const;

const meta: Meta<typeof Em> = {
  title: 'Web UI / Components / Em',
  component: Em,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Em>;

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Flex direction="column" gap={1}>
        {textVariants.map(variant => (
          <Text key={variant} variant={variant}>
            We <Em>had</Em> to do something about it.
          </Text>
        ))}
      </Flex>
    );
  },
};
