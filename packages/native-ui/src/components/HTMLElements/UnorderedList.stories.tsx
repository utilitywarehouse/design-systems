import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import UnorderedList from './UnorderedList';
import ListItem from './ListItem';
import { space } from '../../tokens';
import { InputType } from 'storybook/internal/types';

const gap: InputType = {
  options: Object.keys(space),
  control: 'select',
  description: 'Gap between list items.',
};

const meta = {
  title: 'Stories / UnorderedList',
  component: UnorderedList,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    gap,
  },
  args: {
    gap: '100',
    children: undefined,
  },
} satisfies Meta<typeof UnorderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ ...args }) => (
    <UnorderedList {...args}>
      <ListItem>List item 1</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </UnorderedList>
  ),
};

export const WithCustomGap: Story = {
  args: {
    gap: '400',
  },
  render: ({ ...args }) => (
    <UnorderedList {...args}>
      <ListItem>List item 1 with larger gap</ListItem>
      <ListItem>List item 2 with larger gap</ListItem>
      <ListItem>List item 3 with larger gap</ListItem>
    </UnorderedList>
  ),
};
