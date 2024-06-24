import { ComponentPropsWithoutRef } from 'react';
import { COLOR_SCHEME } from '../types';

export interface AlertProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Sets the colour scheme.
   * @default info
   */
  colorScheme?: COLOR_SCHEME.cyan | COLOR_SCHEME.red | COLOR_SCHEME.green | COLOR_SCHEME.gold;
  /**
   * Sets the function to be called when the alert is dismissed and shows the dismiss icon.
   */
  onDismiss?: () => void;
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
  /**
   * Sets the function to be called when the alert button is clicked.
   */
  onClick?: () => void;
}
