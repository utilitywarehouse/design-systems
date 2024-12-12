import Box from './Box';
import BoxPerfTest from './BoxPerfTest';
import type { Meta } from '@storybook/react';

const BoxMeta: Meta<typeof Box> = {
  title: 'Native UI / Components / Box',
  component: Box,
};

export default BoxMeta;

export { Box as Playground, BoxPerfTest };
