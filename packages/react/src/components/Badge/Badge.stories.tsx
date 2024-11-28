import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { colors } from '@utilitywarehouse/colour-system';
import { StarSmallIcon } from '@utilitywarehouse/react-icons';

import { Badge } from './Badge';
import { Flex } from '../Flex/Flex';
import { Box } from '../Box/Box';

const variants = ['soft', 'strong', 'outline'] as const;
const colorSchemes = ['cyan', 'green', 'red', 'gold', 'grey'] as const;

const meta: Meta<typeof Badge> = {
  title: 'Stories / Badge',
  component: Badge,
  argTypes: {
    children: { control: { type: 'text' } },
    variant: { options: variants, control: { type: 'radio' } },
    size: { options: ['small', 'medium'], control: { type: 'radio' } },
    colorScheme: { options: colorSchemes, control: { type: 'radio' } },
    bottomRadiusZero: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Badge',
    variant: 'soft',
    size: 'medium',
    colorScheme: 'cyan',
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
          <Flex key={variant} gap="32px" justify="center" padding="32px" direction="column">
            {colorSchemes.map(colorScheme => (
              <Flex key={colorScheme} direction="row" gap="16px">
                <Badge variant={variant} colorScheme={colorScheme}>
                  Badge
                </Badge>
                <Badge size="small" variant={variant} colorScheme={colorScheme}>
                  Badge
                </Badge>
                <Badge variant={variant} colorScheme={colorScheme}>
                  <StarSmallIcon />
                  Badge
                </Badge>
                <Badge size="small" variant={variant} colorScheme={colorScheme}>
                  <StarSmallIcon />
                  Badge
                </Badge>
                <Badge variant={variant} colorScheme={colorScheme} bottomRadiusZero>
                  Badge
                </Badge>
                <Badge size="small" variant={variant} colorScheme={colorScheme} bottomRadiusZero>
                  Badge
                </Badge>
                <Badge variant={variant} colorScheme={colorScheme} bottomRadiusZero>
                  <StarSmallIcon />
                  Badge
                </Badge>
                <Badge size="small" variant={variant} colorScheme={colorScheme} bottomRadiusZero>
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
    <Flex gap="16px">
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
    <Flex gap="16px">
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
        <Box style={{ marginLeft: '250px' }}>
          <Badge colorScheme="green" variant="strong" bottomRadiusZero>
            Multi SIM offer
          </Badge>
        </Box>
        <Box
          width="400px"
          height="200px"
          backgroundColor={colors.green100}
          style={{ borderRadius: '8px' }}
        />
      </Box>
    );
  },
};

export const Compact: Story = {
  name: 'Responsive size',
  render: args => (
    <Badge {...args} size={{ mobile: 'small', tablet: 'medium' }}>
      Responsive badge size
    </Badge>
  ),
};
