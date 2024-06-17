import type { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';

export interface BaseCheckboxProps extends Omit<RadixCheckboxProps, 'value'> {
  value: string;
}
