import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../../Flex';
import { Heading } from '../../Heading';
import { Button } from './Button';
import {
  ChevronLeft01MediumIcon,
  ChevronRight01MediumIcon,
  ChevronLeft01SmallIcon,
  ChevronRight01SmallIcon,
} from '@utilitywarehouse/react-icons';

const meta: Meta<typeof Button> = {
  title: 'Web UI / Lab / Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

const sizes = ['large', 'small'] as const;
const variants = ['solid', 'ghost', 'outline'] as const;
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
        {variants.map(variant => (
          <Flex gap={2} direction="column">
            <Heading variant="h2" textTransform="capitalize">
              {variant}
            </Heading>
            <Flex gap={3} align="center">
              {sizes.map(size => (
                <Flex gap={2}>
                  {colorSchemes[variant].map(colorScheme => (
                    <Button
                      key={colorScheme}
                      variant={variant}
                      colorScheme={colorScheme}
                      size={size}
                    >
                      Button
                    </Button>
                  ))}
                </Flex>
              ))}
            </Flex>
          </Flex>
        ))}
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
    size: { mobile: 'small', tablet: 'large', desktop: 'small', wide: 'large' },
  },
};

export const WithIcons: Story = {
  render: () => {
    return (
      <Flex direction="column" gap={6}>
        {variants.map(variant => (
          <Flex gap={2} direction="column">
            <Heading variant="h2" textTransform="capitalize">
              {variant}
            </Heading>
            <Flex gap={3} direction="column">
              <Flex gap={2} align="center">
                {colorSchemes[variant].map(colorScheme => (
                  <Button
                    key={colorScheme}
                    variant={variant}
                    colorScheme={colorScheme}
                    size="large"
                  >
                    <ChevronLeft01MediumIcon /> Button
                  </Button>
                ))}
                {colorSchemes[variant].map(colorScheme => (
                  <Button
                    key={colorScheme}
                    variant={variant}
                    colorScheme={colorScheme}
                    size="small"
                  >
                    <ChevronLeft01SmallIcon /> Button
                  </Button>
                ))}
              </Flex>
              <Flex gap={2} align="center">
                {colorSchemes[variant].map(colorScheme => (
                  <Button
                    key={colorScheme}
                    variant={variant}
                    colorScheme={colorScheme}
                    size="large"
                  >
                    Button <ChevronRight01MediumIcon />
                  </Button>
                ))}
                {colorSchemes.solid.map(colorScheme => (
                  <Button
                    key={colorScheme}
                    variant={variant}
                    colorScheme={colorScheme}
                    size="small"
                  >
                    Button <ChevronRight01SmallIcon />
                  </Button>
                ))}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    );
  },
};
