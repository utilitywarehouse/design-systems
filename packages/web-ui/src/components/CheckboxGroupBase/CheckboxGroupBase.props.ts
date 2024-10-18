import { ComponentPropsWithoutRef } from 'react';

import { CheckboxGroupBaseContextValue } from './CheckboxGroupBase.context';

export interface CheckboxGroupBaseProps extends ComponentPropsWithoutRef<'fieldset'> {
  name?: string;
  defaultValue?: Array<string>;
  value?: CheckboxGroupBaseContextValue['value'];
  onValueChange?: (value: Array<string>) => void;
}
