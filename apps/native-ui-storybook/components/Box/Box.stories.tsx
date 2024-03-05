import Box from './Box';
import BoxWithRef from './BoxWithRef';
import type { Meta } from '@storybook/react';

const BoxMeta: Meta<typeof Box> = {
  title: 'components/Box',
  component: Box,

  args: { bg: 'red500', w: 100, h: 100 },
};

export default BoxMeta;

export { Box, BoxWithRef };
