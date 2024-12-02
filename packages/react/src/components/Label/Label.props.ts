import type { ComponentPropsWithout, RemovedProps } from '../../types/component-props';

interface CommonLabelProps {
  /**
   * @default label
   */
  as?: 'label' | 'span';
  /** Change the default rendered element for the one passed as a child, merging their props and behavior. */
  asChild?: boolean;
  /** Sets the disabled prop, when true sets the label colour to grey */
  disabled?: boolean;
  /**
   * Sets the nested prop, when true will set the font-weight to regular. Use
   * this when nesting the labelled element inside a Fieldset, for instance if
   * labelling a Radio inside a RadioGroup.
   */
  nested?: boolean;
  /** Make the text unselectable, for use when associated with input elements. */
  disableUserSelect?: boolean;
}
type LabelSpanProps = { as?: 'span' } & ComponentPropsWithout<'span', RemovedProps>;
type LabelLabelProps = { as: 'label' } & ComponentPropsWithout<'label', RemovedProps>;
export type LabelProps = CommonLabelProps & (LabelSpanProps | LabelLabelProps);
