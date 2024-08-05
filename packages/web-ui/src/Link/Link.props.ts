import { ComponentPropsWithoutRef } from 'react';
import { Responsive } from '../types';
import { TextProps } from '../Text';

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  /**
   * Sets the link size.
   * @default large
   */
  size?: Responsive<'large' | 'small'>;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
  textTransform?: TextProps['textTransform'];
}
