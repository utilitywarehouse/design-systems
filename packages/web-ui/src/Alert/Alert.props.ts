import type { ComponentPropsWithoutRef } from 'react';

export interface AlertProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Sets the colour scheme.
   * @default cyan
   */
  colorScheme?: 'cyan' | 'green' | 'gold' | 'red';
  /**
   * Sets the function to be called when the alert is closed.
   */
  onClose?: () => void;
  /**
   * Sets the direction of the alert content.
   * @default column
   */
  direction?: 'row' | 'column';
  /**
   * Sets the title of the alert.
   */
  title?: string;
  /**
   * Sets the text of the alert.
   */
  text?: string;
  /**
   * Sets the link text of the alert.
   */
  linkText?: string;
  /**
   * Sets the link href of the alert.
   */
  linkHref?: string;
}
