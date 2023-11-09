import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { ChevronRightMediumIcon, ChevronRightSmallIcon } from '@utilitywarehouse/react-icons';
import { Flex } from '../Flex';
import { Heading } from '../Heading';

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

export const Workshop: Story = {};

export const AsLink: Story = {
  render: () => (
    <IconButton asChild>
      <a href="https://uw.co.uk/services">
        <ChevronRightMediumIcon />
      </a>
    </IconButton>
  ),
};
