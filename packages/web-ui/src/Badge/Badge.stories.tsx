import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Backgrounds } from '../storybook-utils';
import { Badge } from './Badge';
import { Flex } from '../Flex';
import { StarSmallIcon } from '@utilitywarehouse/react-icons';

const variants = ['soft', 'strong', 'outline'] as const;
const colorSchemes = ['cyan', 'green', 'red', 'gold', 'grey'] as const;

const meta: Meta<typeof Badge> = {
  title: 'Web UI / Components / Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: 'text' } },
    variant: { options: [...variants], control: { type: 'radio' } },
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

export const ContextualColour: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
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

export const Workshop: Story = {};
