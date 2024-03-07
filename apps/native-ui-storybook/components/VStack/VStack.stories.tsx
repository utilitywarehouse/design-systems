import VStack from './VStack';
import VStackReversedExample from './VStackReversed';
import type { Meta } from '@storybook/react';

const VStackMeta: Meta<typeof VStack> = {
  title: 'components/VStack',
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

export { VStack };
export { VStackReversedExample };
