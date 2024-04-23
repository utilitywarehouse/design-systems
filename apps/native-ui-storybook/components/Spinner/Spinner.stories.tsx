import Spinner from './Spinner';
import type { Meta } from '@storybook/react';

const BoxMeta: Meta<typeof Spinner> = {
  title: 'components/Spinner',
  component: Spinner,
  args: { bg: 'red500', w: 100, h: 100 },
};

export default BoxMeta;

export { Spinner };
