import React from 'react';
import { Text } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { VStack } from '../VStack';
import { VariantTitle } from '../../../docs/components';
import { colors } from '@utilitywarehouse/colour-system';

const meta = {
  title: 'Stories / Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      type: 'string',
      control: 'text',
      description: 'The content of the text.',
    },
    size: {
      options: ['xs', 'sm', 'md'],
      control: 'select',
      description: 'The size of the text.',
    },
    highlight: {
      type: 'boolean',
      control: 'boolean',
      description: 'Highlight the text.',
    },
    truncated: {
      type: 'boolean',
      control: 'boolean',
      description: 'Truncate the text.',
    },
    bold: {
      type: 'boolean',
      control: 'boolean',
      description: 'Bold the text.',
    },
    italic: {
      type: 'boolean',
      control: 'boolean',
      description: 'Italicize the text.',
    },
    underline: {
      type: 'boolean',
      control: 'boolean',
      description: 'Underline the text.',
    },
    strikeThrough: {
      type: 'boolean',
      control: 'boolean',
      description: 'Strike through the text.',
    },
    color: {
      options: Object.keys(colors).map(color => `$${color}`),
      control: 'select',
      description: 'Color of the text. Use the color name from the theme.',
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    size: 'md',
    highlight: false,
    truncated: false,
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    color: '$grey1000',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => {
    return (
      <VStack space="2xl">
        <VariantTitle title="Default - Body / Medium">
          <Text>Work Sans - Regular (400), 16px Size / 24px Line height / 0px Letter</Text>
        </VariantTitle>
        <VariantTitle title="Default - Body / Medium - Strikethrough">
          <Text strikeThrough>
            Work Sans - Regular (400), 16px Size / 24px Line height / 0px Letter
          </Text>
        </VariantTitle>
        <VariantTitle title="Default - Body / Medium - Highlight">
          <Text highlight>
            Work Sans - Semi Bold (600), 16px Size / 24px Line height / 0px Letter
          </Text>
        </VariantTitle>
        <VariantTitle title="Body Small">
          <Text size="sm">
            Work Sans - Regular (400), 14px Size / 16px Line height / 0px Letter
          </Text>
        </VariantTitle>
        <VariantTitle title="Body Small - Highlighted">
          <Text size="sm" highlight>
            Work Sans - Semi Bold (600), 14px Size / 16px Line height / 0px Letter
          </Text>
        </VariantTitle>
        <VariantTitle title="Body X-Small">
          <Text size="xs">
            Work Sans - Regular (400), 12px Size / 16px Line height / 0px Letter
          </Text>
        </VariantTitle>
      </VStack>
    );
  },
};
