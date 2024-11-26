import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  ChevronLeftSmallIcon,
  ChevronRightSmallIcon,
  ChevronUpSmallIcon,
} from '@utilitywarehouse/react-icons';

import { Link } from './Link';
import { Flex } from '../Flex/Flex';

const meta: Meta<typeof Link> = {
  title: 'Stories / Link',
  component: Link,
  args: { href: '#', size: 'small' },
  argTypes: {
    children: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
    size: { control: { type: 'radio' }, options: ['large', 'small'] },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

const sizes = ['large', 'small'] as const;

export const KitchenSink: Story = {
  render: () => (
    <Flex direction="column" gap="32px">
      <Flex gap="16px" align="center">
        {sizes.map(size => (
          <Link key={size} size={size} href="#">
            Hamburgefons
            <ChevronRightSmallIcon />
          </Link>
        ))}
      </Flex>
      <Flex gap="16px" align="center">
        {sizes.map(size => (
          <Link key={size} size={size} href="#">
            <ChevronLeftSmallIcon />
            Hamburgefons
          </Link>
        ))}
      </Flex>
    </Flex>
  ),
};

export const Workshop: Story = {
  args: {
    children: 'Link',
    href: '#',
  },
};

export const SimpleExample: Story = {
  render: () => (
    <Link href="#">
      Link
      <ChevronRightSmallIcon />
    </Link>
  ),
};

export const WithIcons: Story = {
  render: args => (
    <Flex gap="48px">
      <Link {...args}>
        <ChevronLeftSmallIcon />
        Back to Home
      </Link>
      <Link {...args}>
        <ChevronUpSmallIcon />
        Back to top
      </Link>
      <Link {...args}>
        Continue
        <ChevronRightSmallIcon />
      </Link>
    </Flex>
  ),
};

export const ResponsiveSize: Story = {
  args: {
    children: 'Responsive size link',
    size: {
      mobile: 'large',
      tablet: 'small',
      desktop: 'large',
      wide: 'small',
    },
  },
};

export const AsButton: Story = {
  render: () => (
    <Link asChild>
      <button onClick={() => alert('Hello world!')}>
        View UW services
        <ChevronRightSmallIcon />
      </button>
    </Link>
  ),
};

export const LengthyContent: Story = {
  render: args => (
    <Flex width="800px">
      <Link {...args}>{args.children}</Link>
    </Flex>
  ),
  args: {
    children:
      'Agnes Bernice Martin was an American abstract painter known for her minimalist style and abstract expressionism.',
  },
};