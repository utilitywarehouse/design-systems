import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ChevronRightMediumIcon,
  ChevronRightSmallIcon,
  ChevronLeftMediumIcon,
  ChevronLeftSmallIcon,
  OpenMediumIcon,
  ChevronUpMediumIcon,
} from '@utilitywarehouse/react-icons';
import { Link } from './Link';
import { Flex } from '../../Flex';

const meta: Meta<typeof Link> = {
  title: 'Web UI / Lab / Link / Link',
  component: Link,
  args: { href: '#' },
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
    <Flex direction="column" gap={4}>
      <Flex gap={2} align="center">
        {sizes.map(size => (
          <Link key={size} size={size} href="#">
            Link
            {size === 'large' ? <ChevronRightMediumIcon /> : <ChevronRightSmallIcon />}
          </Link>
        ))}
      </Flex>
      <Flex gap={2} align="center">
        {sizes.map(size => (
          <Link key={size} size={size} href="#">
            {size === 'large' ? <ChevronLeftMediumIcon /> : <ChevronLeftSmallIcon />}
            Link
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
      <ChevronRightMediumIcon />
    </Link>
  ),
};

export const WithIcons: Story = {
  render: args => (
    <Flex gap={6}>
      <Link {...args}>
        <ChevronLeftMediumIcon />
        Back to Home
      </Link>
      <Link {...args}>
        <ChevronUpMediumIcon />
        Back to top
      </Link>
      <Link {...args}>
        Check the guidelines
        <OpenMediumIcon />
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
        <OpenMediumIcon />
      </button>
    </Link>
  ),
};

export const FullWidth: Story = {
  render: args => (
    <Flex direction="column" align="stretch" gap={2}>
      <Link {...args}>
        {args.children}
        <ChevronRightMediumIcon />
      </Link>
    </Flex>
  ),
  args: { children: 'Full width link with icon' },
};
