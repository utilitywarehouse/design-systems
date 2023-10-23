import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRightMediumIcon } from '@utilitywarehouse/react-icons';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Web UI / Lab / Link',
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Workshop: Story = {
  render: () => (
    <Link>
      Link
      <ChevronRightMediumIcon />
    </Link>
  ),
};
