import Text from './Text';
import Variants from './Variants';
import type { Meta } from '@storybook/react';

const TextMeta: Meta<typeof Text> = {
  title: 'Native UI / Components / Text',
  component: Text,
  argTypes: {},
  args: {},
};

export default TextMeta;

export { Text as Playground, Variants };
