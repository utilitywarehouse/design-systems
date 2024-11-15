import HStack from './HStack';
import type { Meta } from '@storybook/react';

const HStackMeta: Meta<typeof HStack> = {
  title: 'Native UI / Components / HStack',
  component: HStack,
  argTypes: {
    space: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    reversed: {
      control: 'boolean',
    },
  },
  args: {
    space: 'md',
    reversed: false,
  },
};

export default HStackMeta;

export { HStack as Playground };
