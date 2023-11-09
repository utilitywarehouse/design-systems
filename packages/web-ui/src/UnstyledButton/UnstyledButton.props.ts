import { ComponentPropsWithoutRef } from 'react';

export type UnstyledButtonProps = {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
} & ComponentPropsWithoutRef<'button'>;
