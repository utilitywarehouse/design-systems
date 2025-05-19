import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import OrderedList from './OrderedList';
import ListItem from './ListItem';
import { space } from '../../tokens';
import { InputType } from 'storybook/internal/types';
import { SpaceValue } from '../../types';

const gap: InputType = {
  options: Object.keys(space),
  control: 'select',
  description: 'Gap between list items.',
};

const meta = {
  title: 'Stories / OrderedList',
  component: OrderedList,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: false }, // Children will be provided by the render function
    gap,
  },
  args: {
    gap: '100',
    children: undefined,
  },
} satisfies Meta<typeof OrderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ ...args }) => (
    <OrderedList {...args}>
      <ListItem>List item 1</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </OrderedList>
  ),
};

export const WithCustomGap: Story = {
  args: {
    gap: '400' as SpaceValue,
    children: undefined,
  },
  render: ({ ...args }) => (
    <OrderedList {...args}>
      <ListItem>List item 1 with larger gap</ListItem>
      <ListItem>List item 2 with larger gap</ListItem>
      <ListItem>List item 3 with larger gap</ListItem>
    </OrderedList>
  ),
};
