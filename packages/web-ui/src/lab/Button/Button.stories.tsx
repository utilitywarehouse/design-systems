import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../../Flex';
import { Heading } from '../../Heading';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Web UI / Lab / Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

const sizes = ['large', 'small'] as const;
const colorSchemes = {
  solid: ['cyan', 'red', 'green'] as const,
  outline: ['cyan', 'grey', 'red', 'green', 'gold'] as const,
};

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Flex direction="column" gap={2}>
        <Heading>Solid</Heading>
        <Flex gap={3}>
          {sizes.map(size => (
            <Flex gap={2}>
              {colorSchemes.solid.map(colorScheme => (
                <Button key={colorScheme} variant="solid" colorScheme={colorScheme} size={size}>
                  Button
                </Button>
              ))}
            </Flex>
          ))}
        </Flex>
        <Heading>Outline</Heading>
        <Flex gap={3}>
          {sizes.map(size => (
            <Flex gap={2}>
              {colorSchemes.outline.map(colorScheme => (
                <Button key={colorScheme} variant="outline" colorScheme={colorScheme} size={size}>
                  Button
                </Button>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  },
};

export const Workshop: Story = {
  argTypes: {
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Button',
    disabled: false,
  },
};
