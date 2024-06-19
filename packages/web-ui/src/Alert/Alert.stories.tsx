import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Flex } from '../Flex';

const colorSchemes = ['info', 'warning', 'error', 'success'] as const;

const meta: Meta<typeof Alert> = {
  title: 'Web UI / Components / Alert',
  component: Alert,
  argTypes: {
    children: { control: { type: 'text' } },
    colorScheme: { options: colorSchemes, control: { type: 'radio' } },
  },
  args: {
    children: 'Alert',
    colorScheme: 'info',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Flex direction="column" gap={2}>
        {colorSchemes.map(colorScheme => (
          <Flex key={colorScheme} direction="column" gap={2}>
            <Alert colorScheme={colorScheme} direction="row">
              <span>Alert text</span>
              <a href="#">Alert link</a>
            </Alert>
            <Alert colorScheme={colorScheme} direction="column">
              <span>Alert text</span>
              <a href="#">Alert link</a>
            </Alert>
            <Alert
              colorScheme={colorScheme}
              direction="row"
              dismissible
              onDismiss={() => alert('dismissed')}
            >
              <span>Alert text</span>
              <a href="#">Alert link</a>
            </Alert>
            <Alert
              colorScheme={colorScheme}
              direction="column"
              dismissible
              onDismiss={() => alert('dismissed')}
            >
              <span>Alert text</span>
              <a href="#">Alert link</a>
            </Alert>
          </Flex>
        ))}
      </Flex>
    );
  },
};

export const Workshop: Story = {};
