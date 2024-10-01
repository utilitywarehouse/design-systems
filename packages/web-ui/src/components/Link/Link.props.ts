import type { ComponentPropsWithoutRef } from 'react';

import type { Responsive } from '../../types';

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
  /** Inverts the component colours, for use on darker backgrounds. */
  inverted?: boolean;
}
