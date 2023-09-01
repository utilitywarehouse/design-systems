import { ResponsiveStyleValue } from '@mui/system';
import { ComponentPropsWithoutRef } from 'react';
import { BoxProps } from '../Box';

export interface SpacerProps extends ComponentPropsWithoutRef<'div'> {
  /** The direction of the Spacer axis */
  axis?: 'horizontal' | 'vertical';
  /**
   * The size of the Spacer.
   * This uses the default spacing scale, so this value will be multiplied by 8px
   */
  size: ResponsiveStyleValue<number>;
  /**
   * Changes whether the rendered element is inline, if true will render a `span` rather than a `div`.
   */
  inline?: boolean;
  /**
   * Sets the HTML component that is rendered.
   * @default div
   */
  component?: BoxProps['component'];
}
