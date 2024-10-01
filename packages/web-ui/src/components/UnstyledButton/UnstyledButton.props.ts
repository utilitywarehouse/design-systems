import { ComponentPropsWithoutRef } from 'react';

export interface UnstyledButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
}
