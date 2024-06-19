import { ComponentPropsWithoutRef } from 'react';

export interface AlertProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Sets the colour scheme.
   * @default info
   */
  colorScheme?: 'info' | 'success' | 'warning' | 'error';
  /**
   * Sets whether the alert is dismissible.
   * @default false
   */
  dismissible?: boolean;
  /**
   * Sets the function to be called when the alert is dismissed.
   */
  onDismiss?: () => void;
  /**
   * Sets the direction of the alert content.
   * @default column
   */
  direction?: 'row' | 'column';
}
