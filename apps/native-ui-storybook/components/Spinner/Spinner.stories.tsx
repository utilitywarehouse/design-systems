import Spinner from './Spinner';
import Variants from './Variants';
import type { Meta } from '@storybook/react';

const SpinnerMeta: Meta<typeof Spinner> = {
  title: 'components/Spinner',
  component: Spinner,
};

export default SpinnerMeta;

export { Spinner as Playground, Variants };
