import { colors } from '@utilitywarehouse/colour-system';
import Box from './Box';
import type { Meta } from '@storybook/react';

const BoxMeta: Meta<typeof Box> = {
  title: 'Native UI / Components / Lab / Box',
  component: Box,
  argTypes: {
    bg: {
      options: [...Object.keys(colors)],
      control: 'select',
      description: 'Background color of the box. Use the color name from the theme.',
    },
    w: { control: 'number' },
    h: { control: 'number' },
  },
  // @ts-expect-error - This is a playground
  args: { bg: 'red500', w: 100, h: 100 },
};

export default BoxMeta;

export { Box };
