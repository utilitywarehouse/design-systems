import Heading from './Heading';
import Variants from './Variants';
import type { Meta } from '@storybook/react';

const HeadingMeta: Meta<typeof Heading> = {
  title: 'Native UI / Components / Heading',
  component: Heading,
  argTypes: {},
  args: {},
};

export default HeadingMeta;

export { Heading as Playground, Variants };
