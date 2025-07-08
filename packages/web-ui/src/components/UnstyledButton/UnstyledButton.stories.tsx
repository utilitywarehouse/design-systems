import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { UnstyledButton } from './UnstyledButton';

const meta: Meta<typeof UnstyledButton> = {
  title: 'Web UI / Stories / UnstyledButton',
  component: UnstyledButton,
  argTypes: { children: { control: { type: 'text' } } },
  args: { children: 'UnstyledButton' },
};

export default meta;
type Story = StoryObj<typeof UnstyledButton>;

export const Workshop: Story = {};

export const AsLink: Story = {
  render: () => (
    <UnstyledButton asChild>
      <a href="https://uw.co.uk/services">View UW services</a>
    </UnstyledButton>
  ),
};
