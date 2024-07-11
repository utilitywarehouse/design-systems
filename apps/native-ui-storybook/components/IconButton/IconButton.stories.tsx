import { Meta } from '@storybook/react';
import IconButton from './IconButton';
import PlaygroundVariants from './PlaygroundVariants';
import Variants from './Variants';

const IconButtonMeta: Meta<typeof IconButton> = {
  title: 'Native UI / Components / IconButton',
  component: IconButton,
};

export default IconButtonMeta;

export { IconButton as Playground, PlaygroundVariants, Variants };
