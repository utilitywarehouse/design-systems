import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../../Flex';
import { Heading } from '../../Heading';
import { Button } from './Button';
import {
  ChevronLeft01MediumIcon,
  ChevronRight01MediumIcon,
  ChevronLeft01SmallIcon,
  ChevronRight01SmallIcon,
  OpenMediumIcon,
  SettingsMediumIcon,
} from '@utilitywarehouse/react-icons';

const meta: Meta<typeof Button> = {
  title: 'Web UI / Lab / Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const sizes = ['large', 'small'] as const;
const variants = ['solid', 'outline', 'ghost'] as const;
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
            <Flex gap={3} align="center">
              {sizes.map(size => (
                <Flex gap={2}>
                  {colorSchemes[variant].map(colorScheme => (
                    <Button
                      disabled
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
    variant: { control: { type: 'radio' }, options: variants },
    colorScheme: { options: colorSchemes.ghost, control: { type: 'radio' } },
    size: { control: { type: 'radio' }, options: sizes },
  },
  args: {
    children: 'Button',
    disabled: false,
    variant: 'solid',
    colorScheme: 'cyan',
    size: 'large',
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
                {colorSchemes[variant].map(colorScheme => (
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

export const BasicWithIcons: Story = {
  render: () => {
    return (
      <Flex gap={2} align="center">
        {variants.map(variant => (
          <Button variant={variant} size="large">
            <SettingsMediumIcon />
            Edit account
          </Button>
        ))}
      </Flex>
    );
  },
};

export const AsLink: Story = {
  render: () => (
    <Button asChild>
      <a href="https://uw.co.uk/services">
        View UW services
        <OpenMediumIcon />
      </a>
    </Button>
  ),
};

export const Basic: Story = {
  render: () => (
    <Flex gap={2}>
      {variants.map(variant => (
        <Button key={variant} variant={variant} size="large" onClick={() => alert('Hello world!')}>
          Next page <ChevronRight01MediumIcon />
        </Button>
      ))}
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap={2} align="center">
      {sizes.map(size => (
        <Button key={size} variant="outline" size={size}>
          Edit address
        </Button>
      ))}
    </Flex>
  ),
};

export const SolidVariant: Story = {
  render: () => (
    <Flex gap={2} align="center">
      {colorSchemes.solid.map(color => (
        <Button key={color} variant="solid" size="large" colorScheme={color}>
          Solid button
        </Button>
      ))}
    </Flex>
  ),
};

export const OutlineVariant: Story = {
  render: () => (
    <Flex gap={2} align="center">
      {colorSchemes.outline.map(color => (
        <Button key={color} variant="outline" size="large" colorScheme={color}>
          Outline button
        </Button>
      ))}
    </Flex>
  ),
};

export const GhostVariant: Story = {
  render: () => (
    <Flex gap={2} align="center">
      {colorSchemes.ghost.map(color => (
        <Button key={color} variant="ghost" size="large" colorScheme={color}>
          Ghost button
        </Button>
      ))}
    </Flex>
  ),
};

export const FullWidth: Story = {
  decorators: [
    Story => (
      <Flex direction="column" align="stretch">
        <Story />
      </Flex>
    ),
  ],
  args: { children: 'Full width button' },
};
