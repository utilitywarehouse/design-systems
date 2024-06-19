import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Flex } from '../Flex';
import { AlertTitle } from './AlertTitle';
import { AlertText } from './AlertText';
import { AlertLink } from './AlertLink';

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
              <AlertTitle>Alert title</AlertTitle>
              <AlertText>Alert text</AlertText>
              <AlertLink href="#">Alert link</AlertLink>
            </Alert>
            <Alert colorScheme={colorScheme} direction="column">
              <AlertTitle>Alert title</AlertTitle>
              <AlertText>Alert text</AlertText>
              <AlertLink href="#">Alert link</AlertLink>
            </Alert>
            <Alert
              colorScheme={colorScheme}
              direction="row"
              dismissible
              onDismiss={() => alert('dismissed')}
            >
              <AlertTitle>Alert title</AlertTitle>
              <AlertText>Alert text</AlertText>
              <AlertLink href="#">Alert link</AlertLink>
            </Alert>
            <Alert
              colorScheme={colorScheme}
              direction="column"
              dismissible
              onDismiss={() => alert('dismissed')}
            >
              <AlertTitle>Alert title</AlertTitle>
              <AlertText>Alert text</AlertText>
              <AlertLink href="#">Alert link</AlertLink>
            </Alert>
            <Alert colorScheme={colorScheme} direction="row" onClick={() => alert('clicked')}>
              <AlertTitle>Alert title</AlertTitle>
              <AlertText>Alert text</AlertText>
            </Alert>
            <Alert colorScheme={colorScheme} direction="column" onClick={() => alert('clicked')}>
              <AlertTitle>Alert title</AlertTitle>
              <AlertText>Alert text</AlertText>
            </Alert>
          </Flex>
        ))}
      </Flex>
    );
  },
};

export const Workshop: Story = {};
