import VStack from './VStack';
import type { Meta } from '@storybook/react';

const VStackMeta: Meta<typeof VStack> = {
  title: 'Native UI / Components / VStack',
  component: VStack,
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

export default VStackMeta;

export { VStack as Playground };
