import { Meta } from '@storybook/react';
import Button from './Button';
import PlaygroundVariants from './PlaygroundVariants';
import Variants from './Variants';

const ButtonMeta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
};

export default ButtonMeta;

export { Button as Playground, PlaygroundVariants, Variants };
