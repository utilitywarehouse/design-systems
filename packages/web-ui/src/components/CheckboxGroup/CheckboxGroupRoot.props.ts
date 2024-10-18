import { ComponentPropsWithoutRef } from 'react';

import { BoxProps } from '../Box';

export interface CheckboxGroupRootProps extends ComponentPropsWithoutRef<'div'> {
  name?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: Array<string>;
  value?: Array<string>;
  onValueChange?: (value: Array<string>) => void;
  /** The direction of the checkboxes, will also set the aria-orientation value. */
  direction?: 'column' | 'row';
  /**
   * Set the width of the RadioGroup.
   */
  width?: BoxProps['width'];
}
