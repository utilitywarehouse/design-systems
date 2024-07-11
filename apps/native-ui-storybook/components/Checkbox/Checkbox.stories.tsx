import { Meta } from '@storybook/react';
import Checkbox from './Checkbox';
import Variants from './Variants';

const CheckboxMeta: Meta<typeof Checkbox> = {
  title: 'Native UI / Components / Checkbox',
  component: Checkbox,
};

export default CheckboxMeta;
export { Checkbox as Playground, Variants };
