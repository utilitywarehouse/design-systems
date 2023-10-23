import { ComponentPropsWithoutRef } from 'react';

export type LinkProps = {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
} & ComponentPropsWithoutRef<'a'>;
