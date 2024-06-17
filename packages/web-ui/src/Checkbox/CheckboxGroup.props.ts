import { BaseCheckboxGroupProps } from './BaseCheckboxGroup.props';

export interface CheckboxGroupProps extends BaseCheckboxGroupProps {
  /** The direction of the radios, will also set the aria-orientation value. */
  direction?: 'column' | 'row';
}
