import { HTMLAttributes } from 'react';

export interface FieldsetLegendProps extends HTMLAttributes<HTMLLegendElement> {
  /** Sets whether the text should appear disabled. */
  disabled?: boolean;
}
