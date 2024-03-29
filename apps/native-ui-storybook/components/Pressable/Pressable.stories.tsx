import Pressable from './Pressable';
import type { Meta } from '@storybook/react';

const PressableMeta: Meta<typeof Pressable> = {
  title: 'components/Pressable',
  component: Pressable,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `By providing access to hover, pressed, and focus events, Pressable serves as a more flexible alternative to buttons at a lower level of abstraction. It is a useful primitive for advanced customization needs.`,
  },
  argTypes: {},
  args: {},
};

export default PressableMeta;

export { Pressable };
