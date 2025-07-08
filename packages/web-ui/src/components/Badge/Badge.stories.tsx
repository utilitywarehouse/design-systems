import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { colors } from '@utilitywarehouse/colour-system';
import { StarSmallIcon } from '@utilitywarehouse/react-icons';

import { Badge } from './Badge';

import { Box } from '../Box';
import { Flex } from '../Flex';

import { Backgrounds } from '../../storybook-components';

const variants = ['soft', 'strong', 'outline'] as const;
const colorSchemes = ['cyan', 'green', 'red', 'gold', 'grey'] as const;

const meta: Meta<typeof Badge> = {
  title: 'Web UI / Stories / Badge',
  component: Badge,
  argTypes: {
    children: { control: { type: 'text' } },
    variant: { options: variants, control: { type: 'radio' } },
    colorScheme: { options: colorSchemes, control: { type: 'radio' } },
    compact: { control: { type: 'boolean' } },
    inverted: { control: { type: 'boolean' } },
    bottomRadiusZero: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Badge',
    variant: 'soft',
    colorScheme: 'cyan',
    compact: false,
    inverted: false,
    bottomRadiusZero: false,
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Flex direction="column">
        {variants.map(variant => (
          <Flex key={variant} gap={4} justifyContent="center" padding={4} direction="column">
            {colorSchemes.map(colorScheme => (
              <Flex key={colorScheme} direction="row" gap={2}>
                <Badge variant={variant} colorScheme={colorScheme}>
                  Badge
                </Badge>
                <Badge compact variant={variant} colorScheme={colorScheme}>
                  Badge
                </Badge>
                <Badge variant={variant} colorScheme={colorScheme}>
                  <StarSmallIcon />
                  Badge
                </Badge>
                <Badge compact variant={variant} colorScheme={colorScheme}>
                  <StarSmallIcon />
                  Badge
                </Badge>
                <Badge variant={variant} colorScheme={colorScheme} bottomRadiusZero>
                  Badge
                </Badge>
                <Badge compact variant={variant} colorScheme={colorScheme} bottomRadiusZero>
                  Badge
                </Badge>
                <Badge variant={variant} colorScheme={colorScheme} bottomRadiusZero>
                  <StarSmallIcon />
                  Badge
                </Badge>
                <Badge compact variant={variant} colorScheme={colorScheme} bottomRadiusZero>
                  <StarSmallIcon />
                  Badge
                </Badge>
              </Flex>
            ))}
          </Flex>
        ))}
      </Flex>
    );
  },
};

export const Workshop: Story = {};

export const Variants: Story = {
  render: () => (
    <Flex gap={2}>
      {variants.map(variant => (
        <Badge key={variant} variant={variant}>
          {variant}
        </Badge>
      ))}
    </Flex>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <Flex gap={2}>
      {colorSchemes.map(colorScheme => (
        <Badge key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </Badge>
      ))}
    </Flex>
  ),
};

export const BottomRadiusZero: Story = {
  render: () => {
    return (
      <Box>
        <Box marginLeft="250px">
          <Badge colorScheme="green" variant="strong" bottomRadiusZero>
            Multi SIM offer
          </Badge>
        </Box>
        <Box width={400} height={200} borderRadius="8px" bgcolor={colors.green100} />
      </Box>
    );
  },
};

export const ContextualColour: Story = {
  render: () => {
    return (
      <Backgrounds>
        <Flex gap={4}>
          {colorSchemes.map(colorScheme => (
            <Badge key={colorScheme} colorScheme={colorScheme} variant="outline">
              {colorScheme}
            </Badge>
          ))}
        </Flex>
      </Backgrounds>
    );
  },
};

export const Compact: Story = {
  name: 'Responsive padding',
  render: args => (
    <Badge {...args} compact={{ mobile: true, desktop: false }}>
      Responsive badge padding
    </Badge>
  ),
};
