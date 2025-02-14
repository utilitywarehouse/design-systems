import React from 'react';
import { Switch } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { VStack } from '../VStack';
import { VariantTitle } from '../../../docs/components';

const meta = {
  title: 'Stories / Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'boolean',
      description: 'Use this value to set the Switch value.',
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
      description: 'Use this value to set the Switch size.',
    },
    disabled: {
      control: 'boolean',
      description: 'Use this value to disable the Switch.',
    },
  },
  args: {
    value: false,
    size: 'medium',
    disabled: false,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <VStack space="sm">
      <VariantTitle title="Off - medium">
        <Switch value={false} />
      </VariantTitle>
      <VariantTitle title="On - medium">
        <Switch value={true} />
      </VariantTitle>
      <VariantTitle title="Off - medium - Disabled">
        <Switch value={false} disabled />
      </VariantTitle>
      <VariantTitle title="On - medium - Disabled">
        <Switch value={true} disabled />
      </VariantTitle>
      <VariantTitle title="Off - small">
        <Switch value={false} size="small" />
      </VariantTitle>
      <VariantTitle title="On - small">
        <Switch value={true} size="small" />
      </VariantTitle>
      <VariantTitle title="Off - small - Disabled">
        <Switch value={false} size="small" disabled />
      </VariantTitle>
      <VariantTitle title="On - small - Disabled">
        <Switch value={true} size="small" disabled />
      </VariantTitle>
    </VStack>
  ),
};
