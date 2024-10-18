import { ComponentPropsWithoutRef } from 'react';

import { BaseCheckboxGroupContextValue } from './BaseCheckboxGroup.context';

export interface BaseCheckboxGroupProps extends ComponentPropsWithoutRef<'fieldset'> {
  name?: string;
  defaultValue?: Array<string>;
  value?: BaseCheckboxGroupContextValue['value'];
  onValueChange?: (value: Array<string>) => void;
}
