import { CheckboxGroupBaseContextValue } from './CheckboxGroupBase.context';

export interface CheckboxGroupBaseProps {
  name?: string;
  defaultValue?: Array<string>;
  value?: CheckboxGroupBaseContextValue['value'];
  onValueChange?: (value: Array<string>) => void;
}
