import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { IconButton } from './IconButton';
import * as React from 'react';
import { Flex } from '../Flex/Flex';
import { Heading } from '../Heading/Heading';
import { ChevronRightMediumIcon, ChevronRightSmallIcon } from '@utilitywarehouse/react-icons';

const sizes = ['medium', 'small', 'xsmall'] as const;
const variants = ['solid', 'outline', 'ghost'] as const;
const colorSchemes = {
  solid: ['cyan', 'red', 'green'] as const,
  outline: ['cyan', 'red', 'green', 'gold', 'grey'] as const,
  ghost: ['cyan', 'red', 'green', 'gold', 'grey'] as const,
};

const meta: Meta<typeof IconButton> = {
  title: 'Stories / IconButton',
  component: IconButton,
  parameters: { layout: 'centered' },
  argTypes: {
    children: { control: { type: 'text' } },
    variant: { control: { type: 'radio' }, options: variants },
    colorScheme: { options: colorSchemes.outline, control: { type: 'radio' } },
    size: { control: { type: 'radio' }, options: sizes },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    onClick: fn(),
    variant: 'solid',
    colorScheme: 'cyan',
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Workshop: Story = {
  render: args => (
    <Flex gap="200">
      <IconButton {...args}>
        <ChevronRightMediumIcon />
      </IconButton>
    </Flex>
  ),
};

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Flex direction="column" gap="48px">
        <Flex gap="16px" direction="column">
          <Heading variant="h2" style={{ textTransform: 'capitalize' }}>
            Solid
          </Heading>
          <Flex gap="32px" align="center">
            {sizes.map(size => (
              <Flex key={size} gap="8px">
                {colorSchemes.solid.map(colorScheme => (
                  <IconButton
                    key={colorScheme}
                    variant="solid"
                    colorScheme={colorScheme}
                    size={size}
                    onClick={() => alert('hello, world!')}
                    label="continue"
                  >
                    {size === 'xsmall' ? <ChevronRightSmallIcon /> : <ChevronRightMediumIcon />}
                  </IconButton>
                ))}
              </Flex>
            ))}
          </Flex>
          <Flex gap="32px" align="center">
            {sizes.map(size => (
              <Flex key={size} gap="8px">
                {colorSchemes.solid.map(colorScheme => (
                  <IconButton
                    disabled
                    key={colorScheme}
                    variant="solid"
                    colorScheme={colorScheme}
                    size={size}
                    onClick={() => alert('hello, world!')}
                    label="continue"
                  >
                    {size === 'xsmall' ? <ChevronRightSmallIcon /> : <ChevronRightMediumIcon />}
                  </IconButton>
                ))}
              </Flex>
            ))}
          </Flex>
        </Flex>
        {(['outline', 'ghost'] as const).map(variant => (
          <Flex key={variant} gap="16px" direction="column">
            <Heading variant="h2" style={{ textTransform: 'capitalize' }}>
              {variant}
            </Heading>
            <Flex gap="32px" align="center">
              {sizes.map(size => (
                <Flex key={size} gap="8px">
                  {colorSchemes[variant].map(colorScheme => (
                    <IconButton
                      key={colorScheme}
                      variant={variant}
                      colorScheme={colorScheme}
                      size={size}
                      onClick={() => alert('hello, world!')}
                      label="continue"
                    >
                      {size === 'xsmall' ? <ChevronRightSmallIcon /> : <ChevronRightMediumIcon />}
                    </IconButton>
                  ))}
                </Flex>
              ))}
            </Flex>
            <Flex gap="32px" align="center">
              {sizes.map(size => (
                <Flex key={size} gap="8px">
                  {colorSchemes[variant].map(colorScheme => (
                    <IconButton
                      disabled
                      key={colorScheme}
                      variant={variant}
                      colorScheme={colorScheme}
                      size={size}
                      onClick={() => alert('hello, world!')}
                      label="continue"
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

export const AsLink: Story = {
  render: args => {
    return (
      <IconButton {...args} asChild>
        <a href={args.disabled ? undefined : 'https://uw.co.uk/services'}>
          <ChevronRightMediumIcon />
        </a>
      </IconButton>
    );
  },
};
