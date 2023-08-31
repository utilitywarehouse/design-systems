import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text';
import { Flex } from '../Flex';
import { Strong } from './Strong';

const textVariants = ['subtitle', 'body', 'legalNote', 'caption'] as const;

const meta: Meta<typeof Strong> = {
  title: 'Web UI / Components / Strong',
  component: Strong,
  tags: ['autodocs'],
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
