import { Meta } from '@storybook/react';
import FormField from './FormField';
import Variants from './Variants';

const FormFieldMeta: Meta<typeof FormField> = {
  title: 'Native UI / Components / Form Field',
  component: FormField,
};

export default FormFieldMeta;

export { FormField as Playground, Variants };
