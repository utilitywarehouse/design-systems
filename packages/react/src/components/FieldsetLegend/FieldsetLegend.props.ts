import type { ComponentPropsWithout, RemovedProps } from '../../types/component-props';

interface CommonFieldsetLegendProps {
  /**
   * Set the legend text appearance to disabled.
   */
  disabled?: boolean;
}
export interface FieldsetLegendProps
  extends CommonFieldsetLegendProps,
    ComponentPropsWithout<'legend', RemovedProps> {}
