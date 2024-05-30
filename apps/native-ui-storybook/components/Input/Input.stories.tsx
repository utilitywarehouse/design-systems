import { Meta } from '@storybook/react';
import Input from './Input';
import Variants from './Variants';

const InputMeta: Meta<typeof Input> = {
  title: 'Native UI / Components / Input',
  component: Input,
};

export default InputMeta;

export { Input as Playground, Variants };
