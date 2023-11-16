import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { ChevronRightMediumIcon, ChevronRightSmallIcon } from '@utilitywarehouse/react-icons';
import { Flex } from '../Flex';
import { Heading } from '../Heading';
import { Box } from '../Box';

const sizes = ['large', 'small', 'xsmall'] as const;
const variants = ['solid', 'outline', 'ghost'] as const;
const colorSchemes = {
  solid: ['cyan', 'red', 'green'] as const,
  outline: ['cyan', 'grey', 'red', 'green', 'gold'] as const,
  ghost: ['cyan', 'grey', 'red', 'green', 'gold'] as const,
};

const meta: Meta<typeof IconButton> = {
  title: 'Web UI / Components / IconButton',
  component: IconButton,
  argTypes: {
    children: { control: { type: 'text' } },
    variant: { control: { type: 'radio' }, options: variants },
    colorScheme: { options: colorSchemes.ghost, control: { type: 'radio' } },
    size: { control: { type: 'radio' }, options: sizes },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    children: 'IconButton',
    variant: 'solid',
    colorScheme: 'cyan',
    size: 'large',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

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
                    <IconButton
                      key={colorScheme}
                      variant={variant}
                      colorScheme={colorScheme}
                      size={size}
                    >
                      {size === 'xsmall' ? <ChevronRightSmallIcon /> : <ChevronRightMediumIcon />}
                    </IconButton>
                  ))}
                </Flex>
              ))}
            </Flex>
            <Flex gap={3} align="center">
              {sizes.map(size => (
                <Flex gap={2}>
                  {colorSchemes[variant].map(colorScheme => (
                    <IconButton
                      disabled
                      key={colorScheme}
                      variant={variant}
                      colorScheme={colorScheme}
                      size={size}
                    >
                      {size === 'xsmall' ? <ChevronRightSmallIcon /> : <ChevronRightMediumIcon />}
                    </IconButton>
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
  render: args => (
    <Flex gap={2}>
      <IconButton onClick={() => alert('Hello world!')} {...args}>
        <ChevronRightMediumIcon />
      </IconButton>
    </Flex>
  ),
};

export const SimpleExample: Story = {
  render: () => (
    <Flex gap={2}>
      {variants.map(variant => (
        <IconButton
          key={variant}
          variant={variant}
          size="large"
          onClick={() => alert('Hello world!')}
        >
          <ChevronRightMediumIcon />
        </IconButton>
      ))}
      <IconButton disabled variant="outline" size="large" onClick={() => alert('Hello world!')}>
        <ChevronRightMediumIcon />
      </IconButton>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap={2} align="center">
      {sizes.map(size => (
        <IconButton key={size} variant="outline" size={size}>
          {size === 'xsmall' ? <ChevronRightSmallIcon /> : <ChevronRightMediumIcon />}
        </IconButton>
      ))}
    </Flex>
  ),
};

export const ResponsiveSize: Story = {
  render: () => (
    <Flex gap={2} align="center">
      <IconButton variant="outline" size={{ mobile: 'xsmall', tablet: 'small', desktop: 'large' }}>
        <Box component={ChevronRightSmallIcon} display={{ tablet: 'none' }} />
        <Box component={ChevronRightMediumIcon} display={{ mobile: 'none', tablet: 'block' }} />
      </IconButton>
    </Flex>
  ),
};

export const SolidVariant: Story = {
  render: () => (
    <Flex gap={2} align="center">
      {colorSchemes.solid.map(color => (
        <IconButton key={color} variant="solid" size="large" colorScheme={color}>
          <ChevronRightMediumIcon />
        </IconButton>
      ))}
    </Flex>
  ),
};

export const OutlineVariant: Story = {
  render: () => (
    <Flex gap={2} align="center">
      {colorSchemes.outline.map(color => (
        <IconButton key={color} variant="outline" size="large" colorScheme={color}>
          <ChevronRightMediumIcon />
        </IconButton>
      ))}
    </Flex>
  ),
};

export const GhostVariant: Story = {
  render: () => (
    <Flex gap={2} align="center">
      {colorSchemes.ghost.map(color => (
        <IconButton key={color} variant="ghost" size="large" colorScheme={color}>
          <ChevronRightMediumIcon />
        </IconButton>
      ))}
    </Flex>
  ),
};

export const AsLink: Story = {
  render: () => (
    <IconButton asChild>
      <a href="https://uw.co.uk/services">
        <ChevronRightMediumIcon />
      </a>
    </IconButton>
  ),
};
