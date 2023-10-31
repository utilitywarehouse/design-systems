import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ChevronRightMediumIcon,
  ChevronRightSmallIcon,
  ChevronLeftMediumIcon,
  ChevronLeftSmallIcon,
} from '@utilitywarehouse/react-icons';
import { Link } from './Link';
import { Flex } from '../../Flex';

const meta: Meta<typeof Link> = {
  title: 'Web UI / Lab / Link',
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

const sizes = ['large', 'small'] as const;

export const Workshop: Story = {
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
