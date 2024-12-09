import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';
import * as React from 'react';
import { Flex } from '../Flex/Flex';
import { Heading } from '../Heading/Heading';

const sizes = ['medium', 'small'] as const;
const variants = ['solid', 'outline', 'ghost'] as const;
const solidColorSchemes = ['cyan', 'red', 'green'] as const;
const colorSchemes = [...solidColorSchemes, 'grey', 'gold'] as const;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Stories / Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    children: { control: { type: 'text' } },
    variant: { control: { type: 'radio' }, options: variants },
    colorScheme: { options: colorSchemes, control: { type: 'radio' } },
    size: { control: { type: 'radio' }, options: sizes },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Button',
    onClick: fn(),
    variant: 'solid',
    colorScheme: 'cyan',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Workshop: Story = {};

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Flex direction="column" gap="48px">
        <Flex gap="16px" direction="column">
          <Heading variant="h2">Solid</Heading>
          <Flex gap="32px" align="center">
            {sizes.map(size => (
              <Flex key={size} gap="8px">
                {solidColorSchemes.map(colorScheme => (
                  <Button key={colorScheme} variant="solid" colorScheme={colorScheme} size={size}>
                    Button
                  </Button>
                ))}
              </Flex>
            ))}
          </Flex>
          <Flex gap="32px" align="center">
            {sizes.map(size => (
              <Flex key={size} gap="8px">
                {solidColorSchemes.map(colorScheme => (
                  <Button
                    disabled
                    key={colorScheme}
                    variant="solid"
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
        {(['outline', 'ghost'] as const).map(variant => (
          <Flex key={variant} gap="16px" direction="column">
            <Heading variant="h2" style={{ textTransform: 'capitalize' }}>
              {variant}
            </Heading>
            <Flex gap="32px" align="center">
              {sizes.map(size => (
                <Flex key={size} gap="8px">
                  {colorSchemes.map(colorScheme => (
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
            <Flex gap="32px" align="center">
              {sizes.map(size => (
                <Flex key={size} gap="8px">
                  {colorSchemes.map(colorScheme => (
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

export const ResponsiveSize: Story = {
  args: {
    children: 'Responsive size button',
    size: {
      mobile: 'medium',
      tablet: 'small',
      desktop: 'medium',
      wide: 'small',
    },
  },
};
