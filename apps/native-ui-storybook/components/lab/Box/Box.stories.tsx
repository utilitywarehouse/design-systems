import Box from './Box';
import BoxWithRef from './BoxWithRef';
import type { Meta } from '@storybook/react';

const BoxMeta: Meta<typeof Box> = {
  title: 'Native UI / Components / Lab / Box',
  component: Box,
};

export default BoxMeta;

export { Box, BoxWithRef };
