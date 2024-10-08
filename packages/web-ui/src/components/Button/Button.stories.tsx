import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { colorsCommon } from '@utilitywarehouse/colour-system';
import { ChevronLeft01SmallIcon, ChevronRight01SmallIcon } from '@utilitywarehouse/react-icons';

import { Button } from './Button';

import { Box } from '../Box';
import { Flex } from '../Flex';
import { Heading } from '../Heading';
import { Text } from '../Text';

const sizes = ['medium', 'small'] as const;
const variants = ['solid', 'outline', 'ghost'] as const;
const solidColorSchemes = ['cyan', 'red', 'green'] as const;
const colorSchemes = [...solidColorSchemes, 'grey', 'gold'] as const;

const meta: Meta<typeof Button> = {
  title: 'Web UI / Components / Button',
  component: Button,
  argTypes: {
    children: { control: { type: 'text' } },
    variant: { control: { type: 'radio' }, options: variants },
    colorScheme: { options: colorSchemes, control: { type: 'radio' } },
    size: { control: { type: 'radio' }, options: sizes },
    disabled: { control: { type: 'boolean' } },
    inverted: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Button',
    variant: 'solid',
    colorScheme: 'cyan',
    size: 'medium',
    disabled: false,
    inverted: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Flex direction="column" gap={6}>
        <Flex gap={2} direction="column">
          <Heading variant="h2" textTransform="capitalize">
            solid
          </Heading>
          <Flex gap={4} align="center">
            {sizes.map(size => (
              <Flex key={size} gap={1}>
                {solidColorSchemes.map(colorScheme => (
                  <Button key={colorScheme} variant="solid" colorScheme={colorScheme} size={size}>
                    Button
                  </Button>
                ))}
              </Flex>
            ))}
          </Flex>
          <Flex gap={4} align="center">
            {sizes.map(size => (
              <Flex key={size} gap={1}>
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
          <Flex key={variant} gap={2} direction="column">
            <Heading variant="h2" textTransform="capitalize">
              {variant}
            </Heading>
            <Flex gap={4} align="center">
              {sizes.map(size => (
                <Flex key={size} gap={1}>
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
            <Flex gap={4} align="center">
              {sizes.map(size => (
                <Flex key={size} gap={1}>
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

export const Workshop: Story = {};

export const AsLink: Story = {
  render: () => (
    <Button asChild>
      <a href="https://uw.co.uk/services">
        View UW services
        <ChevronRight01SmallIcon />
      </a>
    </Button>
  ),
};

export const WithIcons: Story = {
  render: () => {
    return (
      <Flex direction="column" gap={6}>
        <Flex gap={2} direction="column">
          <Heading variant="h2" textTransform="capitalize">
            solid
          </Heading>
          <Flex gap={3} direction="column">
            <Flex gap={2} align="center">
              {solidColorSchemes.map(colorScheme => (
                <Button key={colorScheme} variant="solid" colorScheme={colorScheme} size="medium">
                  <ChevronLeft01SmallIcon /> Button
                </Button>
              ))}
              {solidColorSchemes.map(colorScheme => (
                <Button key={colorScheme} variant="solid" colorScheme={colorScheme} size="small">
                  <ChevronLeft01SmallIcon /> Button
                </Button>
              ))}
            </Flex>
            <Flex gap={2} align="center">
              {solidColorSchemes.map(colorScheme => (
                <Button key={colorScheme} variant="solid" colorScheme={colorScheme} size="medium">
                  Button <ChevronRight01SmallIcon />
                </Button>
              ))}
              {solidColorSchemes.map(colorScheme => (
                <Button key={colorScheme} variant="solid" colorScheme={colorScheme} size="small">
                  Button <ChevronRight01SmallIcon />
                </Button>
              ))}
            </Flex>
          </Flex>
        </Flex>
        {(['outline', 'ghost'] as const).map(variant => (
          <Flex key={variant} gap={2} direction="column">
            <Heading variant="h2" textTransform="capitalize">
              {variant}
            </Heading>
            <Flex gap={3} direction="column">
              <Flex gap={2} align="center">
                {colorSchemes.map(colorScheme => (
                  <Button
                    key={colorScheme}
                    variant={variant}
                    colorScheme={colorScheme}
                    size="medium"
                  >
                    <ChevronLeft01SmallIcon /> Button
                  </Button>
                ))}
                {colorSchemes.map(colorScheme => (
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
                {colorSchemes.map(colorScheme => (
                  <Button
                    key={colorScheme}
                    variant={variant}
                    colorScheme={colorScheme}
                    size="medium"
                  >
                    Button <ChevronRight01SmallIcon />
                  </Button>
                ))}
                {colorSchemes.map(colorScheme => (
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

export const SimpleExample: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Flex gap={2}>
        {variants.map(variant => (
          <Button key={variant} variant={variant}>
            Next
            <ChevronRight01SmallIcon />
          </Button>
        ))}
      </Flex>
      <Flex gap={2}>
        {variants.map(variant => (
          <Button key={variant} variant={variant}>
            <ChevronLeft01SmallIcon />
            Back
          </Button>
        ))}
      </Flex>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap={2} align="center">
      {sizes.map(size => (
        <Button key={size} variant="outline" size={size}>
          Button {size}
        </Button>
      ))}
    </Flex>
  ),
};

export const SolidVariant: Story = {
  render: () => (
    <Flex gap={2} align="center">
      {solidColorSchemes.map(color => (
        <Button key={color} variant="solid" colorScheme={color}>
          Solid button
        </Button>
      ))}
    </Flex>
  ),
};

export const OutlineVariant: Story = {
  render: () => (
    <Flex gap={2} align="center">
      {colorSchemes.map(color => (
        <Button key={color} variant="outline" colorScheme={color}>
          Outline button
        </Button>
      ))}
    </Flex>
  ),
};

export const GhostVariant: Story = {
  render: () => (
    <Flex gap={2} align="center">
      {colorSchemes.map(color => (
        <Button key={color} variant="ghost" colorScheme={color}>
          Ghost button
        </Button>
      ))}
    </Flex>
  ),
};

export const ResponsiveSize: Story = {
  render: args => (
    <Button {...args} size={{ mobile: 'small', desktop: 'medium' }}>
      Responsive size button
      <ChevronRight01SmallIcon />
    </Button>
  ),
};

export const InvertedColour: Story = {
  name: 'Inverted Colour',
  render: () => {
    return (
      <Flex direction="column">
        {[colorsCommon.brandPrimaryPurple, colorsCommon.brandMidnight].map(bgColor => (
          <Box key={bgColor} padding={2} background={bgColor}>
            <Flex direction="column" gap={2}>
              <Flex gap={2}>
                {solidColorSchemes.map(color => (
                  <Button key={color} variant="solid" colorScheme={color}>
                    Button
                  </Button>
                ))}
              </Flex>
              <Flex gap={2}>
                {solidColorSchemes.map(color => (
                  <Button key={color} variant="solid" colorScheme={color} disabled>
                    Button
                  </Button>
                ))}
              </Flex>
              <Flex gap={2}>
                {colorSchemes.map(color => (
                  <Button key={color} variant="outline" colorScheme={color}>
                    Button
                  </Button>
                ))}
              </Flex>
              <Flex gap={2}>
                {colorSchemes.map(color => (
                  <Button key={color} variant="outline" colorScheme={color} disabled>
                    Button
                  </Button>
                ))}
              </Flex>
              <Flex gap={2}>
                {colorSchemes.map(color => (
                  <Button key={color} variant="ghost" colorScheme={color}>
                    Button
                  </Button>
                ))}
              </Flex>
              <Flex gap={2}>
                {colorSchemes.map(color => (
                  <Button key={color} variant="ghost" colorScheme={color} disabled>
                    Button
                  </Button>
                ))}
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    );
  },
};

export const FullWidth: Story = {
  render: args => (
    <Flex direction="column" align={{ mobile: 'stretch', desktop: 'start' }}>
      <Text>This Button is full width for screen widths below the desktop breakpoint.</Text>
      <Button {...args}>
        {args.children}
        <ChevronRight01SmallIcon />
      </Button>
    </Flex>
  ),
  args: { children: 'Full width button with icon' },
};
