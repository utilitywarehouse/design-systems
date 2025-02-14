import React from 'react';
import { Heading } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { VStack } from '../VStack';
import { VariantTitle } from '../../../docs/components';

const meta = {
  title: 'Stories / Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      type: 'string',
      control: 'text',
      description: 'The content of the heading.',
    },
    size: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: 'select',
      description: 'The size of the heading.',
    },
    truncated: {
      type: 'boolean',
      control: 'boolean',
      description: 'Truncate the heading.',
    },
    underline: {
      type: 'boolean',
      control: 'boolean',
      description: 'Underline the heading.',
    },
    strikeThrough: {
      type: 'boolean',
      control: 'boolean',
      description: 'Strike through the heading.',
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    size: 'h4',
    truncated: false,
    underline: false,
    strikeThrough: false,
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => {
    return (
      <VStack space="2xl">
        <VariantTitle title="Heading 1">
          <Heading size="h1">
            Aeonik - Bold (700), 32px Size / 40px Line height / 0px Letter
          </Heading>
        </VariantTitle>
        <VariantTitle title="Heading 2">
          <Heading size="h2">
            Aeonik - Bold (700), 28px Size / 32px Line height / 0px Letter
          </Heading>
        </VariantTitle>
        <VariantTitle title="Heading 3">
          <Heading size="h3">
            Aeonik - Bold (700), 24px Size / 32px Line height / 0px Letter
          </Heading>
        </VariantTitle>
        <VariantTitle title="Heading 4">
          <Heading size="h4">
            Aeonik - Bold (700), 18px Size / 24px Line height / 0px Letter
          </Heading>
        </VariantTitle>
        <VariantTitle title="Heading 5">
          <Heading size="h5">
            Aeonik - Bold (700), 16px Size / 20px Line height / 0px Letter
          </Heading>
        </VariantTitle>
        <VariantTitle title="Heading 6">
          <Heading size="h6">
            Work Sans - Regular (400), 16px Size / 24px Line height / 0px Letter
          </Heading>
        </VariantTitle>
      </VStack>
    );
  },
};
