import type { ComponentPropsWithout, RemovedProps } from '../../types/component-props';

interface CommonHelperTextProps {
  /**
   * Set the helper text appearance to disabled.
   * This will be overriden by the validation status.
   */
  disabled?: boolean;
  /**
   * Set the helper text appearance to show the validation status.
   * This will override the disabled styles.
   *
   * @default undefined
   */
  validationStatus?: 'valid' | 'invalid';
  /**
   * Show the relevant pre-defined icon.
   */
  showIcon?: boolean;
  /** Make the text unselectable, for use when associated with input elements. */
  disableUserSelect?: boolean;
}
export interface HelperTextProps
  extends CommonHelperTextProps,
    ComponentPropsWithout<'span', RemovedProps> {}
