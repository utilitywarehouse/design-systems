import type { BaseRadioGroupProps } from '../BaseRadioGroup';

export interface RadioGroupProps extends Omit<BaseRadioGroupProps, 'orientation'> {
  /** The direction of the radios, will also set the aria-orientation value. */
  direction?: 'column' | 'row';
}
