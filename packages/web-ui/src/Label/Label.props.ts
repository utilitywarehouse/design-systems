import { ComponentPropsWithoutRef, ElementType } from 'react';

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  /** Sets the disabled prop, when true sets the label colour to grey */
  disabled?: boolean;
  /**
   * Sets the nested prop, when true will set the font-weight to regular. Use
   * this when nesting the labelled element inside a Fieldset, for instance if
   * labelling a Radio inside a RadioGroup.
   */
  nested?: boolean;
  /**
   * Sets the HTML component that is rendered.
   * @default label
   */
  component?: ElementType<any> | undefined;
}
