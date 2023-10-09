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
  ghost: ['cyan', 'grey', 'red', 'green', 'gold'] as const,
};

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Flex direction="column" gap={6}>
        <Flex gap={2} direction="column">
          <Heading variant="h2">Solid</Heading>
          <Flex gap={3} align="center">
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
        </Flex>
        <Flex gap={2} direction="column">
          <Heading variant="h2">Ghost</Heading>
          <Flex gap={3} align="center">
            {sizes.map(size => (
              <Flex gap={2}>
                {colorSchemes.ghost.map(colorScheme => (
                  <Button key={colorScheme} variant="ghost" colorScheme={colorScheme} size={size}>
                    Button
                  </Button>
                ))}
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex gap={2} direction="column">
          <Heading variant="h2">Outline</Heading>
          <Flex gap={3} align="center">
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
