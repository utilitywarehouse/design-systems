import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../../Flex';
import { Text } from '../../Text';
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
      <Flex direction="column" gap={4}>
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

export const Examples: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Flex direction="column" gap={4}>
        <Flex direction="column" gap={2}>
          <Text>Button with active state the same styles as the focus state.</Text>
          <Flex gap={3} align="center">
            {colorSchemes.solid.map(colorScheme => (
              <Button
                key={colorScheme}
                variant="solid"
                colorScheme={colorScheme}
                size="large"
                potentialStates="activeFocus"
              >
                Button
              </Button>
            ))}
          </Flex>
        </Flex>
        <Flex direction="column" gap={2}>
          <Text>
            Button with active state different to the focus state styles. (Use arrow keys to
            navigate, space key to activate button.)
          </Text>
          <Flex gap={3} align="center">
            {colorSchemes.solid.map(colorScheme => (
              <Button
                key={colorScheme}
                variant="solid"
                colorScheme={colorScheme}
                size="large"
                potentialStates="separateActiveFocus"
              >
                Button
              </Button>
            ))}
          </Flex>
        </Flex>
        <Flex direction="column" gap={2}>
          <Text>
            Button with active state different to the focus state styles, but using focus-visible,
            so the focus state only appears with keyboard interaction.
          </Text>
          <Flex gap={3} align="center">
            {colorSchemes.solid.map(colorScheme => (
              <Button
                key={colorScheme}
                variant="solid"
                colorScheme={colorScheme}
                size="large"
                potentialStates="focusVisible"
              >
                Button
              </Button>
            ))}
          </Flex>
        </Flex>
        <Flex direction="column" gap={2}>
          <Text>
            Button with active state different to the focus state styles, but using focus-visible,
            and adding an outline offset.
          </Text>
          <Flex gap={3} align="center">
            {colorSchemes.solid.map(colorScheme => (
              <Button
                key={colorScheme}
                variant="solid"
                colorScheme={colorScheme}
                size="large"
                potentialStates="outlineOffset"
              >
                Button
              </Button>
            ))}
          </Flex>
        </Flex>
      </Flex>
    );
  },
};
