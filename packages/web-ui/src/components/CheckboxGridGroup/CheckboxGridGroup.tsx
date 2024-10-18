import * as React from 'react';

import clsx from 'clsx';

import type { CheckboxGridGroupProps } from './CheckboxGridGroup.props';
import { CheckboxGridGroupRoot } from './CheckboxGridGroupRoot';

import { FormFieldGroup } from '../FormFieldGroup';

import { withGlobalPrefix } from '../../utils';

const componentName = 'CheckboxGridGroup';
const componentClassName = withGlobalPrefix(componentName);

/**
 * Set of interactive buttons where multiple options can be selected at a time,
 * displayed in a grid layout. The `CheckboxGridGroup` uses a fieldset to group
 * related `Checkbox` controls. For displaying checkboxes in a column or row,
 * please use the `CheckboxGroup` component. The `CheckboxGridGroup` is
 * responsible for handling the value, helper text, error state, error message,
 * and disabled state, as well as determining the presentation and selection of
 * the items in the list.
 */
export const CheckboxGridGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGridGroupProps>(
  (
    {
      disabled,
      required,
      label,
      helperText,
      helperTextPosition,
      showHelperTextIcon,
      error,
      errorMessage,
      showErrorMessageIcon,
      value,
      defaultValue,
      onValueChange,
      name,
      children,
      contentWidth = 'fit-content',
      columns = 2,
      className,
      ...props
    },
    ref
  ) => {
    const formFieldGroupProps = {
      ...props,
      disabled,
      required,
      label,
      helperText,
      helperTextPosition,
      showHelperTextIcon,
      error,
      errorMessage,
      showErrorMessageIcon,
    };
    const checkboxGridGroupRootProps = {
      width: contentWidth,
      columns,
      name,
      required,
      disabled,
      defaultValue,
      value,
      onValueChange,
      children,
    };
    return (
      <FormFieldGroup
        ref={ref}
        className={clsx(componentClassName, className)}
        {...formFieldGroupProps}
      >
        <CheckboxGridGroupRoot {...checkboxGridGroupRootProps} />
      </FormFieldGroup>
    );
  }
);

CheckboxGridGroup.displayName = componentName;
